from app.models.basemodel import *


class LPR_WarmHealth(BaseModel):
    fkFacility = IntegerField()
    fkHeader = IntegerField()
    LaserPumpTemp = FloatField()
    LaserDrive = FloatField()
    LaserPhotodetector = FloatField()
    Photodetector_mA = FloatField()
    Photodetector_mW = FloatField()
    ModInput = FloatField()
    TempSensor0 = FloatField()
    TempSensor1 = FloatField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "LPR_WarmHealth"
        primary_key = False
