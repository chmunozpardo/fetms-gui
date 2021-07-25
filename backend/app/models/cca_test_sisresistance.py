from app.models.basemodel import *


class CCA_TEST_SISResistance(BaseModel):
    keyId = IntegerField(primary_key=True)
    fkHeader = IntegerField()
    TS = TimestampField()
    Pol = IntegerField()
    SB = IntegerField()
    ROhms = DoubleField()

    class Meta:
        orm_mode = True
        db_table = "CCA_TEST_SISResistance"

