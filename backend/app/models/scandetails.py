from .basemodel import *


class ScanDetails(BaseModel):
    keyId = IntegerField(primary_key=True)
    fkFacility = IntegerField()
    fkScanSetDetails = IntegerField()
    notes = TextField()
    sb = IntegerField()
    ifatten = IntegerField()
    scan_type = IntegerField()
    TS = TimestampField()
    nf_filename = TextField()
    ff_filename = TextField()
    nf_amp_image = TextField()
    nf_phase_image = TextField()
    ff_amp_image = TextField()
    ff_phase_image = TextField()
    pol = IntegerField()
    copol = IntegerField()
    nsi_filename = TextField()
    SourceRotationAngle = DoubleField()
    SourcePosition = IntegerField()
    ProbeZDistance = IntegerField()
    ampdrift = DoubleField()
    phasedrift = DoubleField()
    rfpa_percent = DoubleField()

    class Meta:
        orm_mode = True
        db_table = 'ScanDetails'

