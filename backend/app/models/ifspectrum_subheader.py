from app.models.basemodel import *


class IFSpectrum_SubHeader(BaseModel):
    keyId = IntegerField()
    keyFacility = IntegerField()
    fkHeader = IntegerField()
    fkNoiseFloorHeader = IntegerField()
    Band = IntegerField()
    FreqLO = DoubleField()
    IFChannel = IntegerField()
    IFGain = IntegerField()
    RBW_Hz = IntegerField()
    VBW_Hz = IntegerField()
    StartFreq_Hz = IntegerField()
    StopFreq_Hz = IntegerField()
    InputAtten_dB = IntegerField()
    Pad_dB = IntegerField()
    NumPts = IntegerField()
    Filename = TextField()
    IsPAI = IntegerField()
    IsIncluded = IntegerField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "IFSpectrum_SubHeader"
        primary_key = CompositeKey("keyId", "keyFacility")
