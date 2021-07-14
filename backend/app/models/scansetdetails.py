from .basemodel import *


class ScanSetDetails(BaseModel):
    keyId = IntegerField(primary_key=True)
    fkFacility = IntegerField()
    fkFE_Config = IntegerField()
    fkFrontEnd = IntegerField()
    fkHeader = IntegerField()
    f = FloatField()
    band = IntegerField()
    tilt = DoubleField()
    notes = TextField()
    TS = TimestampField()
    ScanSetNumber = IntegerField()
    is_deleted = IntegerField()
    ready_to_process = IntegerField()
    software_version_vbscript = TextField()
    software_version_labviewvi = TextField()

    class Meta:
        orm_mode = True
        db_table = 'ScanSetDetails'

