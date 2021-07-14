from .basemodel import *


class TEST_Cryostat_data_SubHeader(BaseModel):
    keyId = IntegerField()
    fkHeader = IntegerField()
    keyFacility = IntegerField()
    TS = TimestampField()
    pic_temperature = TextField()
    pic_pressure = TextField()
    pic_rateofrise = TextField()
    RateOfRise = DoubleField()
    ror_starttime = DoubleField()
    ror_stoptime = DoubleField()
    checkbox_rateofrise = TextField()

    class Meta:
        orm_mode = True
        db_table = 'TEST_Cryostat_data_SubHeader'
        primary_key = CompositeKey('keyId', 'keyFacility')
