from .basemodel import *


class CCA_TempSensorConfig(BaseModel):
    keyId = IntegerField(primary_key=True)
    fkFacility = IntegerField()
    fkComponent = IntegerField()
    TS = TimestampField()
    Location = IntegerField()
    Model = IntegerField()
    SN = TextField()
    OffsetK = FloatField()
    Notes = TextField()

    class Meta:
        orm_mode = True
        db_table = 'CCA_TempSensorConfig'

