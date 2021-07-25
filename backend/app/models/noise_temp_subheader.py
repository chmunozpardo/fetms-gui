from app.models.basemodel import *


class Noise_Temp_SubHeader(BaseModel):
    keyId = IntegerField()
    keyFacility = IntegerField()
    fkHeader = IntegerField()
    TS = TimestampField()
    PolMode = IntegerField()
    SbMode = IntegerField()
    FEIFGain = IntegerField()
    ChopMode = IntegerField()
    TargetStdErr = DoubleField()
    Timeout = IntegerField()
    RequireLock = IntegerField()
    UseYIG = IntegerField()
    TColdEff = FloatField()
    SW_Ver = TextField()
    ploturl1 = TextField()
    ploturl2 = TextField()
    ploturl3 = TextField()
    ploturl4 = TextField()
    ploturl5 = TextField()
    ploturl6 = TextField()
    OptNotes = TextField()

    class Meta:
        orm_mode = True
        db_table = "Noise_Temp_SubHeader"
        primary_key = CompositeKey("keyId", "keyFacility")
