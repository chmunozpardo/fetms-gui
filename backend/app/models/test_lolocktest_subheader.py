from app.models.basemodel import *


class TEST_LOLockTest_SubHeader(BaseModel):
    keyId = IntegerField()
    keyFacility = IntegerField()
    fkHeader = IntegerField()
    TS = TextField()
    Band = IntegerField()
    LOStart = DoubleField()
    LOStop = DoubleField()
    LOStep = DoubleField()
    Randomize = IntegerField()
    RequireLORTMLock = IntegerField()
    LORTMTimeout = IntegerField()
    LOTimeout = IntegerField()
    LPRModulation = DoubleField()

    class Meta:
        orm_mode = True
        db_table = "TEST_LOLockTest_SubHeader"
        primary_key = CompositeKey("keyId", "keyFacility")
