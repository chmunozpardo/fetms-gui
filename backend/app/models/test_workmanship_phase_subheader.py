from .basemodel import *


class TEST_Workmanship_Phase_SubHeader(BaseModel):
    keyTEST_Workmanship_Phase_SubHeader = IntegerField()
    TS = TimestampField()
    keyFacilty = IntegerField()
    fkHeader = IntegerField()
    powermeter_unit = TextField()
    rf = DoubleField()
    lo = DoubleField()
    pol = IntegerField()
    sb = IntegerField()
    TimeAtEachTiltAngle = TextField()
    TiltAngles = TextField()
    TiltSequenceIterations = IntegerField()
    meas_length = IntegerField()
    logfile_path = TextField()

    class Meta:
        orm_mode = True
        db_table = 'TEST_Workmanship_Phase_SubHeader'
        primary_key = CompositeKey('keyTEST_Workmanship_Phase_SubHeader', 'keyFacilty')
