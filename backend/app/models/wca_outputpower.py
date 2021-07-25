from app.models.basemodel import *


class WCA_OutputPower(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    keyDataSet = IntegerField()
    TS = TextField()
    FreqLO = DoubleField()
    Power = DoubleField()
    Pol = IntegerField()
    VD0 = DoubleField()
    VD1 = DoubleField()
    VG0 = DoubleField()
    VG1 = DoubleField()

    class Meta:
        orm_mode = True
        db_table = "WCA_OutputPower"
        primary_key = False
