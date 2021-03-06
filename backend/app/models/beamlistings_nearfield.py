from app.models.basemodel import *


class BeamListings_nearfield(BaseModel):
    fkScanDetails = IntegerField()
    fkFacility = IntegerField()
    x = FloatField()
    y = FloatField()
    amp = FloatField()
    phase = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "BeamListings_nearfield"
        primary_key = CompositeKey("fkScanDetails", "x", "y")
