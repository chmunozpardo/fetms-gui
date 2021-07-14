from .basemodel import *


class CPDS_monitor(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    Band = IntegerField()
    FreqLO = DoubleField()
    P6V_V = FloatField()
    N6V_V = FloatField()
    P15V_V = FloatField()
    N15V_V = FloatField()
    P24V_V = FloatField()
    P8V_V = FloatField()
    P6V_I = FloatField()
    N6V_I = FloatField()
    P15V_I = FloatField()
    N15V_I = FloatField()
    P24V_I = FloatField()
    P8V_I = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = 'CPDS_monitor'
        primary_key = False
