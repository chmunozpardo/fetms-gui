from .basemodel import *


class SourceRotationAngles(BaseModel):
    keyId = IntegerField(primary_key=True)
    band = IntegerField()
    pol0_copol = DoubleField()
    pol1_copol = DoubleField()
    p0_180 = DoubleField()
    p1_180 = DoubleField()
    angle45 = DoubleField()

    class Meta:
        orm_mode = True
        db_table = 'SourceRotationAngles'

