from .basemodel import *


class CCA_TEST_PhaseDrift(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    keyDataSet = IntegerField()
    TS = TimestampField()
    FreqLO = DoubleField()
    FreqCarrier = FloatField()
    Pol = IntegerField()
    SB = IntegerField()
    Time = DoubleField()
    AllanPhase = DoubleField()

    class Meta:
        orm_mode = True
        db_table = 'CCA_TEST_PhaseDrift'
        primary_key = False
