from .basemodel import *


class CCA_TEST_IFSpectrum(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    keyDataSet = IntegerField()
    TS = TimestampField()
    FreqLO = DoubleField()
    Pol = IntegerField()
    SB = IntegerField()
    CenterIF = DoubleField()
    BWIF = DoubleField()
    Power = DoubleField()

    class Meta:
        orm_mode = True
        db_table = 'CCA_TEST_IFSpectrum'
        primary_key = False
