from app.models.basemodel import *


class CCA_SIS_bias(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    FreqLO = DoubleField()
    Pol = IntegerField()
    SB = IntegerField()
    VjRead = FloatField()
    IjRead = FloatField()
    VmagRead = FloatField()
    ImagRead = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "CCA_SIS_bias"
        primary_key = False
