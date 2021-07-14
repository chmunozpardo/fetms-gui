from .basemodel import *


class Photomixer_WarmHealth(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    Band = IntegerField()
    Vpmx = FloatField()
    Ipmx = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = 'Photomixer_WarmHealth'
        primary_key = False
