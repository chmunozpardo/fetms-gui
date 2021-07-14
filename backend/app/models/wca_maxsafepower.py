from .basemodel import *


class WCA_MaxSafePower(BaseModel):
    fkFacility = IntegerField()
    fkFE_Component = IntegerField()
    TS = TimestampField()
    FreqLO = FloatField()
    VD0_setting = FloatField()
    VD1_setting = FloatField()
    VD0 = FloatField()
    VD1 = FloatField()

    class Meta:
        orm_mode = True
        db_table = 'WCA_MaxSafePower'
        primary_key = False
