from .basemodel import *


class CCA_TEST_AmplitudeStability(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    keyDataSet = IntegerField()
    TS = TimestampField()
    FreqLO = DoubleField()
    Pol = IntegerField()
    SB = IntegerField()
    Time = DoubleField()
    AllanVar = DoubleField()

    class Meta:
        orm_mode = True
        db_table = 'CCA_TEST_AmplitudeStability'
        primary_key = False
