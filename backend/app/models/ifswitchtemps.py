from .basemodel import *


class IFSwitchTemps(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    pol0sb1 = FloatField()
    pol0sb2 = FloatField()
    pol1sb1 = FloatField()
    pol1sb2 = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = 'IFSwitchTemps'
        primary_key = False
