from .basemodel import *


class SoftwareVersions(BaseModel):
    keySoftwareVersion = IntegerField(primary_key=True)
    ProgramName = TextField()
    CurrentVersion = TextField()
    PreviousVersion = TextField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = 'SoftwareVersions'

