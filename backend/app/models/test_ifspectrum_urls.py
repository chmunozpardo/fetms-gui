from app.models.basemodel import *


class TEST_IFSpectrum_urls(BaseModel):
    keyId = IntegerField(primary_key=True)
    fkHeader = IntegerField()
    fkFacility = IntegerField()
    Band = IntegerField()
    IFChannel = IntegerField()
    IFGain = IntegerField()
    spurious_url = TextField()
    spurious_url2 = TextField()
    spurious_url2d = TextField()
    spurious_url2d2 = TextField()
    powervar_31MHz_url = TextField()
    powervar_2GHz_url = TextField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "TEST_IFSpectrum_urls"

