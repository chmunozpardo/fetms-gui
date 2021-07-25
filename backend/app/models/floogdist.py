from app.models.basemodel import *


class FLOOGdist(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    Band = IntegerField()
    RefTotalPower = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "FLOOGdist"
        primary_key = False
