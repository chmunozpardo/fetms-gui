from .basemodel import *


class NominalAngles(BaseModel):
    keyId = IntegerField(primary_key=True)
    Band = IntegerField()
    AZ = DoubleField()
    EL = DoubleField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = 'NominalAngles'

