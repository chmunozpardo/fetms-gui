from app.models.basemodel import *


class CCA_TEST_GainCompression(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    keyDataSet = IntegerField()
    TS = TimestampField()
    FreqLO = DoubleField()
    Pol = IntegerField()
    SB = IntegerField()
    Compression = DoubleField()

    class Meta:
        orm_mode = True
        db_table = "CCA_TEST_GainCompression"
        primary_key = False
