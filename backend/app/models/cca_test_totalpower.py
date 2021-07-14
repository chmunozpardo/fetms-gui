from .basemodel import *


class CCA_TEST_TotalPower(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    keyDataSet = IntegerField()
    TS = TimestampField()
    FreqLO = DoubleField()
    Pol = IntegerField()
    SB = IntegerField()
    Power = DoubleField()

    class Meta:
        orm_mode = True
        db_table = 'CCA_TEST_TotalPower'
        primary_key = False
