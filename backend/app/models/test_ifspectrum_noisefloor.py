from .basemodel import *


class TEST_IFSpectrum_NoiseFloor(BaseModel):
    fkHeader = IntegerField()
    fkFacility = IntegerField()
    Freq_Hz = IntegerField()
    Power_dBm = FloatField()

    class Meta:
        orm_mode = True
        db_table = 'TEST_IFSpectrum_NoiseFloor'
        primary_key = False
