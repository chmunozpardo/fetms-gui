from app.models.basemodel import *


class WCA_Misc_bias(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    Band = IntegerField()
    FreqLO = IntegerField()
    PLLtemp = FloatField()
    YTO_heatercurrent = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "WCA_Misc_bias"
        primary_key = False
