import sys
import math
from typing import Optional
from fastapi import APIRouter
from peewee import JOIN, fn
from ..models.front_ends import Front_Ends
from ..models.fe_config import FE_Config
from ..models.testdata_header import TestData_header
from ..models.test_workmanship_amplitude_subheader import TEST_Workmanship_Amplitude_SubHeader
from ..models.test_workmanship_amplitude import TEST_Workmanship_Amplitude
from playhouse.shortcuts import model_to_dict
import datetime


def yToTemp(noiseTemp, Yfactor):
    return (noiseTemp.TAmbient - Yfactor * 77)/(Yfactor-1)


routerWorkmanshipAmplitude = APIRouter(
    prefix="/workmanship_amplitude",
    tags=["workmanship_amplitude"]
)


@routerWorkmanshipAmplitude.get("/results", summary="Result of Health Check")
async def getWorkmanshipAmplitudeResults(keyheader: int):
    data = []
    NT = TEST_Workmanship_Amplitude.alias()
    NT_SH = TEST_Workmanship_Amplitude_SubHeader.alias()
    TD_H = TestData_header.alias()
    query = NT.select() \
        .where((NT.fkHeader == keyheader))
    timestamp_initial = query.get().TS
    element = datetime.datetime.strptime(
        timestamp_initial, "%Y-%m-%d %H:%M:%S.%f")
    timestamp = datetime.datetime.timestamp(element)
    timestamp_initial = timestamp
    min_ts = 0
    max_ts = sys.float_info.min
    for workmanship_amplitude in query:
        element = datetime.datetime.strptime(
            workmanship_amplitude.TS, "%Y-%m-%d %H:%M:%S.%f")
        timestamp = datetime.datetime.timestamp(element)
        max_ts = timestamp - timestamp_initial
        item = {
            "TS": timestamp - timestamp_initial,
            "tilt": workmanship_amplitude.tilt,
            "Pol0chA": workmanship_amplitude.power_pol0_chA,
            "Pol0chB": workmanship_amplitude.power_pol0_chB,
            "Pol1chA": workmanship_amplitude.power_pol1_chA,
            "Pol1chB": workmanship_amplitude.power_pol1_chB,
            "TempSensor1": workmanship_amplitude.tempsensor1,
            "TempSensor2": workmanship_amplitude.tempsensor2,
            "CartTemp0": workmanship_amplitude.CartTemp0,
            "CartTemp1": workmanship_amplitude.CartTemp1,
            "CartTemp2": workmanship_amplitude.CartTemp2,
            "CartTemp3": workmanship_amplitude.CartTemp3,
            "CartTemp4": workmanship_amplitude.CartTemp4,
            "CartTemp5": workmanship_amplitude.CartTemp5,
            "CryoTemp0": workmanship_amplitude.CryoTemp0,
            "CryoTemp1": workmanship_amplitude.CryoTemp1,
            "CryoTemp2": workmanship_amplitude.CryoTemp2,
            "CryoTemp3": workmanship_amplitude.CryoTemp3,
            "CryoTemp4": workmanship_amplitude.CryoTemp4,
            "CryoTemp5": workmanship_amplitude.CryoTemp5,
            "CryoTemp6": workmanship_amplitude.CryoTemp6,
            "CryoTemp7": workmanship_amplitude.CryoTemp7,
            "CryoTemp8": workmanship_amplitude.CryoTemp8,
            "CryoTemp9": workmanship_amplitude.CryoTemp9,
            "CryoTemp10": workmanship_amplitude.CryoTemp10,
            "CryoTemp11": workmanship_amplitude.CryoTemp11,
            "CryoTemp12": workmanship_amplitude.CryoTemp12
        }
        data.append(item)
    result = {
        "minTS": min_ts,
        "maxTS": max_ts,
        "data": data,
    }
    return result
