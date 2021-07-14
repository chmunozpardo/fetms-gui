from .basemodel import *


class WCA_AmplitudeStability(BaseModel):
    fkHeader = IntegerField()
    fkFacility = IntegerField()
    TS = TextField()
    FreqLO = DoubleField()
    Pol = IntegerField()
    SB = IntegerField()
    Time = DoubleField()
    AllanVar = DoubleField()

    class Meta:
        orm_mode = True
        db_table = 'WCA_AmplitudeStability'
        primary_key = False
