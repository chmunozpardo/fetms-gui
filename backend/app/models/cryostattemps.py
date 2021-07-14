from .basemodel import *


class CryostatTemps(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    _4k_CryoCooler = FloatField(column_name='4k_CryoCooler')
    _4k_PlateLink1 = FloatField(column_name='4k_PlateLink1')
    _4k_PlateLink2 = FloatField(column_name='4k_PlateLink2')
    _4k_PlateFarSide1 = FloatField(column_name='4k_PlateFarSide1')
    _4k_PlateFarSide2 = FloatField(column_name='4k_PlateFarSide2')
    _15k_CryoCooler = FloatField(column_name='15k_CryoCooler')
    _15k_PlateLink = FloatField(column_name='15k_PlateLink')
    _15k_PlateFarSide = FloatField(column_name='15k_PlateFarSide')
    _15k_Shield = FloatField(column_name='15k_Shield')
    _110k_CryoCooler = FloatField(column_name='110k_CryoCooler')
    _110k_PlateLink = FloatField(column_name='110k_PlateLink')
    _110k_PlateFarSide = FloatField(column_name='110k_PlateFarSide')
    _110k_Shield = FloatField(column_name='110k_Shield')
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = 'CryostatTemps'
        primary_key = False
