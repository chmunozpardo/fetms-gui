from app.models.basemodel import *


class CCA_TEST_IVCurve(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    keyDataSet = IntegerField()
    TS = TimestampField()
    FreqLO = DoubleField()
    Pol = IntegerField()
    SB = IntegerField()
    VJ = DoubleField()
    IJ = DoubleField()

    class Meta:
        orm_mode = True
        db_table = "CCA_TEST_IVCurve"
        primary_key = False
