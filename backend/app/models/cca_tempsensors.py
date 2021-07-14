from .basemodel import *


class CCA_TempSensors(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    _4k = FloatField(column_name='4k')
    _110k = FloatField(column_name='110k')
    Pol0_mixer = FloatField()
    Spare = FloatField()
    _15k = FloatField(column_name='15k')
    Pol1_mixer = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = 'CCA_TempSensors'
        primary_key = False
