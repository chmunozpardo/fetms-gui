import sys
import math
from typing import Optional
from fastapi import APIRouter
from app.models.testdata_header import TestData_header
from app.models.ifspectrum_subheader import IFSpectrum_SubHeader
from app.models.ifspectrum import IFSpectrum
from playhouse.shortcuts import model_to_dict

routerIFSpectrum = APIRouter(
    prefix="/if_spectrum",
    tags=["if_spectrum"]
)


@routerIFSpectrum.get("/results", summary="Result of Health Check")
async def getIFSpectrumResults(keyheader: int):
    data = []
    lo_list = []
    IF = IFSpectrum.alias()
    IF_SH = IFSpectrum_SubHeader.alias()

    query_subheader = IF_SH.select() \
        .where((IF_SH.fkHeader == keyheader) & (IF_SH.IFGain == 15))

    min_power = sys.float_info.max
    max_power = -sys.float_info.max
    for if_subheader in query_subheader:
        query = IF.select() \
            .where((IF.fkSubHeader == if_subheader.keyId))
        data.append([])
        lo_list.append(if_subheader.FreqLO)
        for if_spectrum in query[10:]:
            min_power = min(min_power, if_spectrum.Power_dBm)
            max_power = max(max_power, if_spectrum.Power_dBm)
            data[-1].append({
                "Freq": if_spectrum.Freq_Hz/1e9,
                "Power": if_spectrum.Power_dBm
            })
    result = {
        "minPower": math.floor(min_power/10.0)*10.0,
        "maxPower": math.ceil(max_power/10.0)*10.0,
        "LOList": lo_list,
        "data": data
    }
    return result
