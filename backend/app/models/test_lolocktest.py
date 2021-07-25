from app.models.basemodel import *


class TEST_LOLockTest(BaseModel):
    keyId = IntegerField()
    fkHeader = IntegerField()
    fkFacility = IntegerField()
    TS = TextField()
    DataSet = IntegerField()
    LOFreq = DoubleField()
    LORTMLocked = IntegerField()
    LOLocked = IntegerField()
    LORTMTimedOut = IntegerField()
    LOTimedOut = IntegerField()
    LOUnlockDetect = IntegerField()
    WCAPLLTemp = DoubleField()
    PLLLockVoltage = DoubleField()
    PLLCorrVoltage = DoubleField()
    PLLIFTotalPower = DoubleField()
    PLLRefTotalPower = DoubleField()
    PhotomixerCurrent = DoubleField()
    YTOCoarseTune = DoubleField()
    YTOFreq = DoubleField()
    LORTMErrors = TextField()
    IsIncluded = IntegerField()

    class Meta:
        orm_mode = True
        db_table = "TEST_LOLockTest"
        primary_key = CompositeKey("keyId", "fkFacility")
