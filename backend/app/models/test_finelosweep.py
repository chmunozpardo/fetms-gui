from app.models.basemodel import *


class TEST_FineLOSweep(BaseModel):
    fkFacility = IntegerField()
    fkSubHeader = IntegerField()
    FreqLO = DoubleField()
    SIS1Current = FloatField()
    SIS2Current = FloatField()
    LOPADrainSetting = FloatField()
    LOPADrainVMonitor = FloatField()

    class Meta:
        orm_mode = True
        db_table = "TEST_FineLOSweep"
        primary_key = False
