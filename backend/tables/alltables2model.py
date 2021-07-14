import csv
import os
from pathlib import Path
from dotenv import load_dotenv

# Get the base directory
basepath = Path()
basedir = str(basepath.cwd())
# Load the environment variables
envars = basedir[:-6] + 'app/.env'
load_dotenv(envars)

DB_HOSTNAME = os.getenv('DB_HOSTNAME')
DB_USERNAME = os.getenv('DB_USERNAME')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_DATABASE = os.getenv('DB_DATABASE')


def getAllTables():
    command = "export MYSQL_PWD=\"" + DB_PASSWORD + "\";" \
        "mysql -h 127.0.0.1 -P 3360 -u " + DB_USERNAME + \
        " -e 'SHOW TABLES;' " + DB_DATABASE + " > all_tables.csv"
    os.system(command)

    with open('all_tables.csv') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            command = "export MYSQL_PWD=\"" + DB_PASSWORD + "\";" \
                "mysql -h 127.0.0.1 -P 3360 -u " + DB_USERNAME + \
                " -e 'DESCRIBE " + row[0] + "' " + \
                DB_DATABASE + " > " + row[0] + ".csv"
            os.system(command)


def table2model(table_name):
    model_name = table_name.split('.')[0]

    print('Converting ' + table_name + ' to ' + model_name.lower() + '.py')

    model_file = open('../app/models/' + model_name.lower() + '.py', 'w+')

    model_file.write('from .basemodel import *\n\n\n')
    model_file.write('class ' + model_name + '(BaseModel):\n')

    keys = []
    with open(table_name) as csvfile:
        reader = csv.reader(csvfile, delimiter='\t')
        for row in reader:
            if "PRI" in row[3]:
                keys.append(row[0])

    with open(table_name) as csvfile:
        reader = csv.reader(csvfile, delimiter='\t')
        for row in reader:
            check_num = row[0][0].isnumeric()
            check_hyphen = row[0].find('-')
            column_name = ''

            if check_num or check_hyphen != -1:
                column_name = 'column_name=\'' + row[0] + '\''
            if check_num:
                row[0] = '_' + row[0]
            if check_hyphen != -1:
                row[0] = row[0].replace('-', '_')
            if len(keys) == 1:
                if keys[0] == row[0]:
                    if check_num:
                        column_name = column_name + ', primary_key=True'
                    else:
                        column_name = 'primary_key=True'

            if "int" in row[1]:
                model_file.write('    ' + row[0] + ' = ' +
                                 'IntegerField(' + column_name + ')\n')
            elif "double" in row[1]:
                model_file.write('    ' + row[0] + ' = ' +
                                 'DoubleField(' + column_name + ')\n')
            elif "float" in row[1]:
                model_file.write('    ' + row[0] + ' = ' +
                                 'FloatField(' + column_name + ')\n')
            elif "timestamp" in row[1]:
                model_file.write('    ' + row[0] + ' = ' +
                                 'TimestampField(' + column_name + ')\n')
            elif "char" in row[1]:
                model_file.write('    ' + row[0] + ' = ' +
                                 'TextField(' + column_name + ')\n')
            elif "text" in row[1]:
                model_file.write('    ' + row[0] + ' = ' +
                                 'TextField(' + column_name + ')\n')
        model_file.write('\n')
        model_file.write('    class Meta:\n')
        model_file.write('        orm_mode = True\n')
        model_file.write('        db_table = \'' + model_name + '\'\n')
        if len(keys) == 0:
            model_file.write('        primary_key = False')
        elif len(keys) > 1:
            composite = ''
            for key in keys:
                composite = composite + '\'' + key + '\', '
            composite = composite[:-2]
            model_file.write(
                '        primary_key = CompositeKey(' + composite + ')')
        model_file.write('\n')

    print('Done')


getAllTables()

with open("all_tables.csv") as csvfile:
    reader = csv.reader(csvfile)
    # We skip the first row
    next(reader)
    for row in reader:
        table2model(row[0] + ".csv")

os.system("rm -rf *.csv")
