from app.models.basemodel import *


class TEST_PolAngles(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    TS = TimestampField()
    f = DoubleField()
    angle = DoubleField()
    amp_pol0 = DoubleField()
    phase_pol0 = DoubleField()
    amp_pol1 = DoubleField()
    phase_pol1 = DoubleField()

    class Meta:
        orm_mode = True
        db_table = "TEST_PolAngles"
        primary_key = False
