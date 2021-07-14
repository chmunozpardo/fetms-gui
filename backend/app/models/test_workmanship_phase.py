from .basemodel import *


class TEST_Workmanship_Phase(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    TS = TextField()
    tilt = FloatField()
    phase = FloatField()
    vna_amplitude = FloatField()
    pll_locked = IntegerField()
    tempsensor1 = FloatField()
    tempsensor2 = FloatField()

    class Meta:
        orm_mode = True
        db_table = 'TEST_Workmanship_Phase'
        primary_key = False
