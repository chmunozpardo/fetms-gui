from .basemodel import *


class CCA_TEST_SidebandRatio(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    keyDataSet = IntegerField()
    TS = TimestampField()
    FreqLO = DoubleField()
    CenterIF = DoubleField()
    BWIF = DoubleField()
    Pol = IntegerField()
    SB = IntegerField()
    SBR = DoubleField()

    class Meta:
        orm_mode = True
        db_table = 'CCA_TEST_SidebandRatio'
        primary_key = False
