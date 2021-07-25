from app.models.basemodel import *


class CCA_PreampParams(BaseModel):
    keyId = IntegerField(primary_key=True)
    fkFacility = IntegerField()
    fkComponent = IntegerField()
    Temperature = FloatField()
    FreqLO = DoubleField()
    Pol = IntegerField()
    SB = IntegerField()
    TS = TimestampField()
    VD1 = FloatField()
    VD2 = FloatField()
    VD3 = FloatField()
    ID1 = FloatField()
    ID2 = FloatField()
    ID3 = FloatField()
    VG1 = FloatField()
    VG2 = FloatField()
    VG3 = FloatField()

    class Meta:
        orm_mode = True
        db_table = "CCA_PreampParams"
