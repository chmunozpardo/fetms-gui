from app.models.basemodel import *


class IFSpectrum(BaseModel):
    fkSubHeader = IntegerField()
    fkFacility = IntegerField()
    Freq_Hz = IntegerField()
    Power_dBm = FloatField()

    class Meta:
        orm_mode = True
        db_table = "IFSpectrum"
        primary_key = False
