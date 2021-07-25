from app.models.basemodel import *


class TEST_IFSpectrum_NoiseFloor_Header(BaseModel):
    keyId = IntegerField()
    fkFacility = IntegerField()
    TS = TimestampField()
    Notes = TextField()

    class Meta:
        orm_mode = True
        db_table = "TEST_IFSpectrum_NoiseFloor_Header"
        primary_key = CompositeKey("keyId", "fkFacility")
