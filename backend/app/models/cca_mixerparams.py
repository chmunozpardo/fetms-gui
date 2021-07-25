from app.models.basemodel import *


class CCA_MixerParams(BaseModel):
    keyId = IntegerField(primary_key=True)
    fkFacility = IntegerField()
    fkComponent = IntegerField()
    Temperature = FloatField()
    FreqLO = DoubleField()
    Pol = IntegerField()
    SB = IntegerField()
    TS = TimestampField()
    VJ = FloatField()
    IJ = FloatField()
    IMAG = FloatField()

    class Meta:
        orm_mode = True
        db_table = "CCA_MixerParams"
