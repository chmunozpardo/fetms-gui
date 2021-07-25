from app.models.basemodel import *


class Cryostat_tempsensors(BaseModel):
    keyId = IntegerField()
    fkCryostat = IntegerField()
    fkFacility = IntegerField()
    sensor_number = IntegerField()
    location = TextField()
    sensor_type = TextField()
    k1 = DoubleField()
    k2 = DoubleField()
    k3 = DoubleField()
    k4 = DoubleField()
    k5 = DoubleField()
    k6 = DoubleField()
    k7 = DoubleField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "Cryostat_tempsensors"
        primary_key = False
