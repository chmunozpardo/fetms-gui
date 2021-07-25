from app.models.basemodel import *


class IFTotalPower(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    Band = IntegerField()
    FreqLO = DoubleField()
    IFChannel = IntegerField()
    Power_0dB_gain = FloatField()
    Power_15dB_gain = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "IFTotalPower"
        primary_key = False
