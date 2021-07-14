from .basemodel import *


class BeamListings_farfield(BaseModel):
    fkScanDetails = IntegerField()
    fkFacility = IntegerField()
    x = FloatField()
    y = FloatField()
    amp = FloatField()
    phase = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = 'BeamListings_farfield'
        primary_key = CompositeKey('fkScanDetails', 'x', 'y')
