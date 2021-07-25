from app.models.basemodel import *


class CCA_TEST_PolAccuracy(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    keyDataSet = IntegerField()
    TS = TimestampField()
    FreqLO = DoubleField()
    FreqCarrier = DoubleField()
    Pol = IntegerField()
    AngleError = DoubleField()

    class Meta:
        orm_mode = True
        db_table = "CCA_TEST_PolAccuracy"
        primary_key = False
