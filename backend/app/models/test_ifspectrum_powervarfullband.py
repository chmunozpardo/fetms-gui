from app.models.basemodel import *


class TEST_IFSpectrum_PowerVarFullBand(BaseModel):
    fkSubHeader = IntegerField()
    fkFacility = IntegerField()
    Power_dBm = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "TEST_IFSpectrum_PowerVarFullBand"
        primary_key = False
