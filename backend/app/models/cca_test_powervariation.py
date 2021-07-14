from .basemodel import *


class CCA_TEST_PowerVariation(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    keyDataSet = IntegerField()
    TS = TimestampField()
    FreqLO = DoubleField()
    Pol = IntegerField()
    SB = IntegerField()
    CenterIF = DoubleField()
    BWIF = DoubleField()
    PowerVar = DoubleField()

    class Meta:
        orm_mode = True
        db_table = 'CCA_TEST_PowerVariation'
        primary_key = False
