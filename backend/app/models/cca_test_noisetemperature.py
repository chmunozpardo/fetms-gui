from app.models.basemodel import *


class CCA_TEST_NoiseTemperature(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    keyDataSet = IntegerField()
    TS = TimestampField()
    FreqLO = DoubleField()
    CenterIF = DoubleField()
    BWIF = DoubleField()
    Pol = IntegerField()
    SB = IntegerField()
    Treceiver = DoubleField()

    class Meta:
        orm_mode = True
        db_table = "CCA_TEST_NoiseTemperature"
        primary_key = False
