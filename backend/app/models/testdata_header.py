from .basemodel import *


class TestData_header(BaseModel):
    keyFacility = IntegerField()
    keyId = IntegerField()
    fkTestData_Type = IntegerField()
    DataSetGroup = IntegerField()
    fkFE_Config = IntegerField()
    fkFE_Components = IntegerField()
    fkDataStatus = IntegerField()
    Band = IntegerField()
    Notes = TextField()
    FETMS_Description = TextField()
    TS = TimestampField()
    PlotURL = TextField()
    Meas_SWVer = TextField()
    Plot_SWVer = TextField()
    UseForPAI = IntegerField()

    class Meta:
        orm_mode = True
        db_table = 'TestData_header'
        primary_key = CompositeKey('keyFacility', 'keyId')
