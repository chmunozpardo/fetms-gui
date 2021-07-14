from .basemodel import *


class prueba(BaseModel):
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
        db_table = 'prueba'
        primary_key = False
