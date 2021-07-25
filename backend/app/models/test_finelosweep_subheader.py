from app.models.basemodel import *


class TEST_FineLOSweep_SubHeader(BaseModel):
    keyFacility = IntegerField()
    keyId = IntegerField()
    fkHeader = IntegerField()
    Band = IntegerField()
    Pol = IntegerField()
    TiltAngle_Deg = FloatField()
    StartLOFreq = DoubleField()
    StopLOFreq = DoubleField()
    StepLOFreq = DoubleField()
    SISVoltage = FloatField()
    TargetSIS1Current = FloatField()
    Legend = TextField()
    ploturl1 = TextField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "TEST_FineLOSweep_SubHeader"
        primary_key = CompositeKey("keyFacility", "keyId")
