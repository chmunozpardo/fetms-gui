from .basemodel import *


class CryostatROR(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    TS = TimestampField()
    RateOfRise = FloatField()

    class Meta:
        orm_mode = True
        db_table = 'CryostatROR'
        primary_key = False
