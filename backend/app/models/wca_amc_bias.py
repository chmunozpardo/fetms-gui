from app.models.basemodel import *


class WCA_AMC_bias(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    Band = IntegerField()
    FreqLO = IntegerField()
    VDA = FloatField()
    VDB = FloatField()
    VDE = FloatField()
    IDA = FloatField()
    IDB = FloatField()
    IDE = FloatField()
    VGA = FloatField()
    VGB = FloatField()
    VGE = FloatField()
    MultD = FloatField()
    MultD_Current = FloatField()
    _5Vsupply = FloatField(column_name="5Vsupply")
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "WCA_AMC_bias"
        primary_key = False
