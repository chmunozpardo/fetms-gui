from app.models.basemodel import *


class CCA_LNA_bias(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    FreqLO = DoubleField()
    Pol = IntegerField()
    SB = IntegerField()
    Stage = IntegerField()
    VdRead = FloatField()
    IdRead = FloatField()
    VgRead = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "CCA_LNA_bias"
        primary_key = False
