from .basemodel import *


class WCA_PhaseJitter(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    LO = DoubleField()
    Jitter = FloatField()
    Pol = IntegerField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = 'WCA_PhaseJitter'
        primary_key = False
