from app.models.basemodel import *


class WCAs(BaseModel):
    keyId = IntegerField(primary_key=True)
    TS = TimestampField()
    fkFacility = IntegerField()
    fkFE_Component = IntegerField()
    SN_PwrAmp = TextField()
    FloYIG = FloatField()
    FhiYIG = FloatField()
    amnz_avgdsb_url = TextField()
    amnz_pol0_url = TextField()
    amnz_pol1_url = TextField()
    amp_stability_url = TextField()
    op_vs_freq_url = TextField()
    op_vs_dv_pol0_url = TextField()
    op_vs_dv_pol1_url = TextField()
    op_vs_ss_pol0_url = TextField()
    op_vs_ss_pol1_url = TextField()
    phasenoise_url = TextField()
    VG0 = DoubleField()
    VG1 = DoubleField()

    class Meta:
        orm_mode = True
        db_table = "WCAs"

