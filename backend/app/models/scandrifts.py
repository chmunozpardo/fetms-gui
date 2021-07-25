from app.models.basemodel import *


class ScanDrifts(BaseModel):
    keyScanDrifts = IntegerField(primary_key=True)
    fkScanDetails = IntegerField()
    pol = IntegerField()
    drift_amp = FloatField(column_name="drift-amp")
    drift_phase = FloatField(column_name="drift-phase")
    amp0 = FloatField()
    phase0 = FloatField()
    file = TextField()
    system = TextField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "ScanDrifts"

