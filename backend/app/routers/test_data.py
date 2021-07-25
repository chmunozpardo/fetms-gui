from fastapi import APIRouter
from app.models.fe_config import FE_Config
from app.models.testdata_header import TestData_header


routerTestData = APIRouter(prefix="/test_data", tags=["test_data"])


@routerTestData.get("/noise_temperature/list", summary="List of Front Ends")
async def getNoiseTemperature(config: int, band: int):
    result = []
    TD_H = TestData_header.alias()
    FE_C = FE_Config.alias()
    front_end = (
        FE_C.select(FE_C.fkFront_Ends)
        .where(FE_C.keyFEConfig == config)
        .get()
        .fkFront_Ends
    )
    query = (
        TD_H.select(TD_H, FE_C)
        .join(FE_C, on=(TD_H.fkFE_Config == FE_C.keyFEConfig))
        .where(
            (FE_C.fkFront_Ends == front_end)
            & (TD_H.fkTestData_Type == 58)
            & (TD_H.Band == band)
        )
        .order_by(TD_H.keyId.desc())
    )
    for test_data in query:
        item = {
            "FETMS_Description": test_data.FETMS_Description,
            "Notes": test_data.Notes,
            "TS": test_data.TS,
            "keyId": test_data.keyId,
            "FE_Config": test_data.fe_config.keyFEConfig,
            "fkFE_Components": test_data.fkFE_Components,
            "fkDataStatus": test_data.fkDataStatus,
        }
        result.append(item)
    return result


@routerTestData.get("/amplitude_stability/list", summary="List of Front Ends")
async def getYFactor(config: int, band: int):
    result = []
    TD_H = TestData_header.alias()
    FE_C = FE_Config.alias()
    front_end = (
        FE_C.select(FE_C.fkFront_Ends)
        .where(FE_C.keyFEConfig == config)
        .get()
        .fkFront_Ends
    )
    query = (
        TD_H.select(TD_H, FE_C)
        .join(FE_C, on=(TD_H.fkFE_Config == FE_C.keyFEConfig))
        .where(
            (FE_C.fkFront_Ends == front_end)
            & (TD_H.fkTestData_Type == 29)
            & (TD_H.Band == band)
        )
        .order_by(TD_H.keyId.desc())
    )
    for test_data in query:
        item = {
            "FETMS_Description": test_data.FETMS_Description,
            "Notes": test_data.Notes,
            "TS": test_data.TS,
            "keyId": test_data.keyId,
            "FE_Config": test_data.fe_config.keyFEConfig,
            "fkFE_Components": test_data.fkFE_Components,
            "fkDataStatus": test_data.fkDataStatus,
        }
        result.append(item)
    return result


@routerTestData.get("/beam_pattern/list", summary="List of Front Ends")
async def getYFactor(config: int, band: int):
    result = []
    TD_H = TestData_header.alias()
    FE_C = FE_Config.alias()
    front_end = (
        FE_C.select(FE_C.fkFront_Ends)
        .where(FE_C.keyFEConfig == config)
        .get()
        .fkFront_Ends
    )
    query = (
        TD_H.select(TD_H, FE_C)
        .join(FE_C, on=(TD_H.fkFE_Config == FE_C.keyFEConfig))
        .where(
            (FE_C.fkFront_Ends == front_end)
            & (TD_H.fkTestData_Type == 55)
            & (TD_H.Band == band)
        )
        .order_by(TD_H.keyId.desc())
    )
    for test_data in query:
        item = {
            "FETMS_Description": test_data.FETMS_Description,
            "Notes": test_data.Notes,
            "TS": test_data.TS,
            "keyId": test_data.keyId,
            "FE_Config": test_data.fe_config.keyFEConfig,
            "fkFE_Components": test_data.fkFE_Components,
            "fkDataStatus": test_data.fkDataStatus,
        }
        result.append(item)
    return result


@routerTestData.get("/lo_locking/list", summary="List of Front Ends")
async def getLOLocking(config: int, band: int):
    result = []
    TD_H = TestData_header.alias()
    FE_C = FE_Config.alias()
    front_end = (
        FE_C.select(FE_C.fkFront_Ends)
        .where(FE_C.keyFEConfig == config)
        .get()
        .fkFront_Ends
    )
    query = (
        TD_H.select(TD_H, FE_C)
        .join(FE_C, on=(TD_H.fkFE_Config == FE_C.keyFEConfig))
        .where(
            (FE_C.fkFront_Ends == front_end)
            & (TD_H.fkTestData_Type == 57)
            & (TD_H.Band == band)
        )
        .order_by(TD_H.keyId.desc())
    )
    for test_data in query:
        item = {
            "FETMS_Description": test_data.FETMS_Description,
            "Notes": test_data.Notes,
            "TS": test_data.TS,
            "keyId": test_data.keyId,
            "FE_Config": test_data.fe_config.keyFEConfig,
            "fkFE_Components": test_data.fkFE_Components,
            "fkDataStatus": test_data.fkDataStatus,
        }
        result.append(item)
    return result


@routerTestData.get("/if_spectrum/list", summary="List of Front Ends")
async def getIFSpectrum(config: int, band: int):
    result = []
    TD_H = TestData_header.alias()
    FE_C = FE_Config.alias()
    front_end = (
        FE_C.select(FE_C.fkFront_Ends)
        .where(FE_C.keyFEConfig == config)
        .get()
        .fkFront_Ends
    )
    query = (
        TD_H.select(TD_H, FE_C)
        .join(FE_C, on=(TD_H.fkFE_Config == FE_C.keyFEConfig))
        .where(
            (FE_C.fkFront_Ends == front_end)
            & (TD_H.fkTestData_Type == 7)
            & (TD_H.Band == band)
        )
        .order_by(TD_H.keyId.desc())
    )
    for test_data in query:
        item = {
            "FETMS_Description": test_data.FETMS_Description,
            "Notes": test_data.Notes,
            "TS": test_data.TS,
            "keyId": test_data.keyId,
            "FE_Config": test_data.fe_config.keyFEConfig,
            "fkFE_Components": test_data.fkFE_Components,
            "fkDataStatus": test_data.fkDataStatus,
        }
        result.append(item)
    return result
