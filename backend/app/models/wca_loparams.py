from app.models.basemodel import *


class WCA_LOParams(BaseModel):
    keyId = IntegerField(primary_key=True)
    fkFacility = IntegerField()
    fkComponent = IntegerField()
    FreqLO = DoubleField()
    TS = TimestampField()
    VDP0 = FloatField()
    VDP1 = FloatField()
    VGP0 = FloatField()
    VGP1 = FloatField()

    class Meta:
        orm_mode = True
        db_table = "WCA_LOParams"
