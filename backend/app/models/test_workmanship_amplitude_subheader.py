from .basemodel import *


class TEST_Workmanship_Amplitude_SubHeader(BaseModel):
    keyTEST_Workmanship_Amplitude_SubHeader = IntegerField()
    keyFacility = IntegerField()
    fkHeader = IntegerField()
    TS = TimestampField()
    fkTestDataheader = IntegerField()
    powermeter_unit = TextField()
    rf = DoubleField()
    lo = DoubleField()
    TimeAtEachTiltAngle = TextField()
    TiltAngles = TextField()
    TiltSequenceIterations = IntegerField()
    meas_length = IntegerField()
    logfile_path = TextField()

    class Meta:
        orm_mode = True
        db_table = 'TEST_Workmanship_Amplitude_SubHeader'
        primary_key = CompositeKey('keyTEST_Workmanship_Amplitude_SubHeader', 'keyFacility')
