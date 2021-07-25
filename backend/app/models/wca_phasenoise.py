from app.models.basemodel import *


class WCA_PhaseNoise(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    TS = TextField()
    Lf = DoubleField()
    FreqLO = DoubleField()
    CarrierOffset = DoubleField()
    Pol = IntegerField()

    class Meta:
        orm_mode = True
        db_table = "WCA_PhaseNoise"
        primary_key = False
