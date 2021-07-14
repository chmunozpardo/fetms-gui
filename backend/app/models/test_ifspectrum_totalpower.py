from .basemodel import *


class TEST_IFSpectrum_TotalPower(BaseModel):
    keyId = IntegerField()
    fkSubHeader = IntegerField()
    fkFacility = IntegerField()
    TotalPower = FloatField()
    InBandPower = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = 'TEST_IFSpectrum_TotalPower'
        primary_key = CompositeKey('keyId', 'fkFacility')
