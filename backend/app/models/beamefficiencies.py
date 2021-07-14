from .basemodel import *


class BeamEfficiencies(BaseModel):
    keyBeamEfficiencies = IntegerField(primary_key=True)
    fkFacility = IntegerField()
    TS = TimestampField()
    fkScanDetails = IntegerField()
    eff_output_file = TextField()
    pol = IntegerField()
    tilt = IntegerField()
    f = FloatField()
    type = TextField()
    ifatten = IntegerField()
    eta_spillover = FloatField()
    eta_taper = FloatField()
    eta_illumination = FloatField()
    ff_xcenter = FloatField()
    ff_ycenter = FloatField()
    az_nominal = FloatField()
    el_nominal = FloatField()
    nf_xcenter = FloatField()
    nf_ycenter = FloatField()
    max_ff_amp_db = FloatField()
    max_nf_amp_db = FloatField()
    delta_x = FloatField()
    delta_y = FloatField()
    delta_z = FloatField()
    eta_phase = FloatField()
    ampfit_amp = FloatField()
    ampfit_width_deg = FloatField()
    ampfit_u_off = FloatField()
    ampfit_v_off = FloatField()
    ampfit_d_0_90 = FloatField()
    ampfit_d_45_135 = FloatField()
    ampfit_edge_db = FloatField()
    plot_copol_nfamp = TextField()
    plot_copol_nfphase = TextField()
    plot_copol_ffphase = TextField()
    plot_copol_ffamp = TextField()
    max_dbdifference = DoubleField()
    datetime = TextField()
    plot_xpol_nfamp = TextField()
    plot_xpol_nfphase = TextField()
    plot_xpol_ffamp = TextField()
    plot_xpol_ffphase = TextField()
    nf = TextField()
    ff = TextField()
    nominal_z_offset = FloatField()
    eta_tot_np = FloatField()
    eta_pol = FloatField()
    eta_tot_nd = FloatField()
    eta_pol_on_secondary = FloatField()
    eta_pol_spill = FloatField()
    defocus_efficiency = FloatField()
    total_aperture_eff = FloatField()
    shift_from_focus_mm = FloatField()
    subreflector_shift_mm = FloatField()
    defocus_efficiency_due_to_moving_the_subreflector = FloatField()
    squint = FloatField()
    squint_arcseconds = FloatField()
    x_diff = FloatField()
    y_diff = FloatField()
    x_corr = FloatField()
    y_corr = FloatField()
    x90 = FloatField()
    y90 = FloatField()
    x0 = FloatField()
    y0 = FloatField()
    DistanceBetweenBeamCenters = FloatField()
    software_version = TextField()
    software_version_class_eff = TextField()
    software_version_vbscript = TextField()
    software_version_labviewvi = TextField()
    pointing_angles_plot = TextField()
    centers = TextField()

    class Meta:
        orm_mode = True
        db_table = 'BeamEfficiencies'

