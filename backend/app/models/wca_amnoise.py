from app.models.basemodel import *


class WCA_AMNoise(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    TS = TextField()
    AMNoise = DoubleField()
    FreqLO = DoubleField()
    FreqIF = DoubleField()
    Pol = DoubleField()
    DrainVoltage = DoubleField()
    GateVoltage = DoubleField()

    class Meta:
        orm_mode = True
        db_table = "WCA_AMNoise"
        primary_key = False
