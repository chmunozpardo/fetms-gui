from .basemodel import *


class Noise_Temp_Band3_Results(BaseModel):
    fkHeader = IntegerField()
    FreqLO = DoubleField()
    Pol0USB = DoubleField()
    Pol0LSB = DoubleField()
    Pol1USB = DoubleField()
    Pol1LSB = DoubleField()
    AvgNT = DoubleField()

    class Meta:
        orm_mode = True
        db_table = 'Noise_Temp_Band3_Results'
        primary_key = False
