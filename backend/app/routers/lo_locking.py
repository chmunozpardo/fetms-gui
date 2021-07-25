import sys
import math
from fastapi import APIRouter
from app.models.test_lolocktest_subheader import TEST_LOLockTest_SubHeader
from app.models.test_lolocktest import TEST_LOLockTest


routerLOLocking = APIRouter(prefix="/lo_locking", tags=["lo_locking"])


@routerLOLocking.get("/results", summary="Result of Health Check")
async def getLOLockingResults(keyheader: int):
    data = []
    LOT = TEST_LOLockTest.alias()
    LOT_SH = TEST_LOLockTest_SubHeader.alias()
    query_subheader = LOT_SH.select().where((LOT_SH.fkHeader == keyheader)).get()
    query = (
        LOT.select()
        .join(LOT_SH, on=(LOT.fkHeader == LOT_SH.keyId))
        .where((LOT_SH.fkHeader == keyheader))
    )

    temperature = {"ymin": sys.float_info.max, "ymax": -sys.float_info.max}

    voltage = {"ymin": sys.float_info.max, "ymax": -sys.float_info.max}

    power = {"ymin": sys.float_info.max, "ymax": -sys.float_info.max}

    current = {"ymin": sys.float_info.max, "ymax": -sys.float_info.max}

    for lo_locking in query:
        temperature["ymin"] = min(temperature["ymin"], lo_locking.WCAPLLTemp)
        temperature["ymax"] = max(temperature["ymax"], lo_locking.WCAPLLTemp)

        voltage["ymin"] = min(
            voltage["ymin"], lo_locking.PLLLockVoltage, lo_locking.PLLCorrVoltage
        )
        voltage["ymax"] = max(
            voltage["ymax"], lo_locking.PLLLockVoltage, lo_locking.PLLCorrVoltage
        )

        power["ymin"] = min(
            power["ymin"], lo_locking.PLLIFTotalPower, lo_locking.PLLRefTotalPower
        )
        power["ymax"] = max(
            power["ymax"], lo_locking.PLLIFTotalPower, lo_locking.PLLRefTotalPower
        )

        current["ymin"] = min(current["ymin"], lo_locking.PhotomixerCurrent)
        current["ymax"] = max(current["ymax"], lo_locking.PhotomixerCurrent)

        data.append(
            {
                "FreqLO": lo_locking.LOFreq,
                "LORTMLocked": lo_locking.LORTMLocked,
                "LOLocked": lo_locking.LOLocked,
                "LOUnlockDetect": lo_locking.LOUnlockDetect,
                "PLLTemp": lo_locking.WCAPLLTemp,
                "LockVoltage": lo_locking.PLLLockVoltage,
                "CorrVoltage": lo_locking.PLLCorrVoltage,
                "IFTotalPower": lo_locking.PLLIFTotalPower,
                "RefTotalPower": lo_locking.PLLRefTotalPower,
                "PhotomixerCurrent": lo_locking.PhotomixerCurrent,
                "YTOCoarseTune": lo_locking.YTOCoarseTune,
                "YTOFreq": lo_locking.YTOFreq,
            }
        )

    temperature["ymin"] = math.floor(temperature["ymin"] / 5.0) * 5.0
    temperature["ymax"] = math.ceil(temperature["ymax"] / 5.0) * 5.0

    voltage["ymin"] = math.floor(voltage["ymin"] / 2.0) * 2.0
    voltage["ymax"] = math.ceil(voltage["ymax"] / 2.0) * 2.0

    power["ymin"] = math.floor(power["ymin"] / 2.0) * 2.0
    power["ymax"] = math.ceil(power["ymax"] / 2.0) * 2.0

    current["ymin"] = math.floor(current["ymin"] / 0.2) * 0.2
    current["ymax"] = math.ceil(current["ymax"] / 0.2) * 0.2

    result = {
        "TS": query_subheader.TS,
        "temperature": temperature,
        "voltage": voltage,
        "power": power,
        "current": current,
        "LOStart": query_subheader.LOStart,
        "LOStop": query_subheader.LOStop,
        "LOStep": query_subheader.LOStep,
        "LPRModulation": query_subheader.LPRModulation,
        "data": data,
    }
    return result
