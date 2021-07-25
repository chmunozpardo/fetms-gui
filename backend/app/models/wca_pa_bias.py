from app.models.basemodel import *


class WCA_PA_bias(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    Band = IntegerField()
    FreqLO = IntegerField()
    VDp0 = FloatField()
    VDp1 = FloatField()
    IDp0 = FloatField()
    IDp1 = FloatField()
    VGp0 = FloatField()
    VGp1 = FloatField()
    _3Vsupply = FloatField(column_name="3Vsupply")
    _5Vsupply = FloatField(column_name="5Vsupply")
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "WCA_PA_bias"
        primary_key = False
