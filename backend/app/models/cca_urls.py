from app.models.basemodel import *


class CCA_urls(BaseModel):
    keyId = IntegerField(primary_key=True)
    fkFacility = IntegerField()
    fkFE_Component = IntegerField()
    url_imagerejection = TextField()
    url_amplitudestability = TextField()
    url_phasedrift = TextField()
    url_noisetemperature = TextField()
    url_sidebandratio = TextField()
    url_inbandpower = TextField()
    url_totalpower = TextField()
    url_powervariation = TextField()
    url_gaincompression = TextField()
    url_ifspectrum = TextField()

    class Meta:
        orm_mode = True
        db_table = "CCA_urls"

