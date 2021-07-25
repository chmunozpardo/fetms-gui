from fastapi import APIRouter
from app.models.testdata_header import TestData_header
from app.models.cca_lna_bias import CCA_LNA_bias
from app.models.cca_tempsensors import CCA_TempSensors
from app.models.cca_sis_bias import CCA_SIS_bias
from app.models.iftotalpower import IFTotalPower
from app.models.wca_amc_bias import WCA_AMC_bias
from app.models.wca_pa_bias import WCA_PA_bias
from app.models.wca_misc_bias import WCA_Misc_bias
from app.models.yfactor import Yfactor
from app.models.cca_test_ivcurve import CCA_TEST_IVCurve
from playhouse.shortcuts import model_to_dict

routerHealthCheck = APIRouter(prefix="/health_check", tags=["health_check"])

dataTypeMapping = {
    "LNA": 1,
    "Temp": 2,
    "SIS": 3,
    "IF_Power": 6,
    "WCA_AMC": 12,
    "WCA_PA": 13,
    "WCA_PLL": 14,
    "Y-Factor": 15,
    "I-V_Curve": 39,
}

dataTypeMappingToObj = {
    "LNA": CCA_LNA_bias,
    "Temp": CCA_TempSensors,
    "SIS": CCA_SIS_bias,
    "IF_Power": IFTotalPower,
    "WCA_AMC": WCA_AMC_bias,
    "WCA_PA": WCA_PA_bias,
    "WCA_PLL": WCA_Misc_bias,
    "Y-Factor": Yfactor,
    "I-V_Curve": CCA_TEST_IVCurve,
}


@routerHealthCheck.get("/headers", summary="Result of Health Check")
async def getHealthCheckHeaders(
    FE_Config: int, band: int, Data_Status: int, Data_Type: str
):
    result = []
    dataType = dataTypeMapping.get(Data_Type, "Invalid Option")
    TD = TestData_header.alias()
    query = (
        TD.select()
        .where(
            (TD.fkFE_Config == FE_Config)
            & (TD.fkTestData_Type == dataType)
            & (TD.Band == band)
            & (TD.fkDataStatus == Data_Status)
        )
        .order_by(TD.keyId.desc())
    )
    for testdata_header in query:
        result.append(model_to_dict(testdata_header))
    return result


@routerHealthCheck.get("/results", summary="Result of Health Check")
async def getHealthCheckResults(
    FE_Config: int, band: int, Data_Status: int, Data_Type: str
):
    result = []
    dataType = dataTypeMapping.get(Data_Type, "Invalid Option")
    obj = dataTypeMappingToObj.get(Data_Type, "Invalid Option")
    CCA = obj.alias()
    TD = TestData_header.alias()
    query = CCA.select().where(
        CCA.fkHeader.in_(
            TD.select(TD.keyId).where(
                (TD.fkFE_Config == FE_Config)
                & (TD.fkTestData_Type == dataType)
                & (TD.Band == band)
                & (TD.fkDataStatus == Data_Status)
            )
        )
    )
    for cca_lna_bias in query:
        result.append(model_to_dict(cca_lna_bias))
    return result
