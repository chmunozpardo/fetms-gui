from app.models.basemodel import *


class Yfactor(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    FreqLO = DoubleField()
    IFchannel = IntegerField()
    Phot_dBm = FloatField()
    Pcold_dBm = FloatField()
    Y = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "Yfactor"
        primary_key = False
