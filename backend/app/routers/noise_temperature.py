import sys
import math
from typing import Optional
from fastapi import APIRouter
from app.models.testdata_header import TestData_header
from app.models.noise_temp_subheader import Noise_Temp_SubHeader
from app.models.noise_temp import Noise_Temp


def yToTemp(noiseTemp, Yfactor):
    return (noiseTemp.TAmbient - Yfactor * 77) / (Yfactor - 1)


routerNoiseTemperature = APIRouter(
    prefix="/noise_temperature", tags=["noise_temperature"]
)


@routerNoiseTemperature.get("/results", summary="Result of Health Check")
async def getNoiseTemperatureResults(keyheader: int, temp: Optional[bool] = True):
    data = []
    NT = Noise_Temp.alias()
    NT_SH = Noise_Temp_SubHeader.alias()
    TD_H = TestData_header.alias()
    query = (
        NT.select()
        .join(NT_SH, on=(NT.fkSub_Header == NT_SH.keyId))
        .join(TD_H, on=(NT_SH.fkHeader == TD_H.keyId))
        .where((TD_H.keyId == keyheader))
    )
    band = TD_H.select(TD_H.Band).where((TD_H.keyId == keyheader)).get().Band
    min_freq = sys.float_info.max
    max_freq = sys.float_info.min
    min_y = 0
    max_y = sys.float_info.min
    for noise_temp in query:
        if noise_temp.CenterIF == 4.0:
            data.append([])
        item = {}

        max_freq = max(max_freq, noise_temp.FreqLO + noise_temp.CenterIF)
        if band in [9, 10]:
            min_freq = min(min_freq, noise_temp.FreqLO + noise_temp.CenterIF)
        elif band in [3, 4, 5, 6, 7, 8]:
            min_freq = min(min_freq, noise_temp.FreqLO - noise_temp.CenterIF)
        if temp:
            max_y = max(
                max_y,
                yToTemp(noise_temp, noise_temp.Pol0Sb1YFactor),
                yToTemp(noise_temp, noise_temp.Pol0Sb2YFactor),
                yToTemp(noise_temp, noise_temp.Pol1Sb1YFactor),
                yToTemp(noise_temp, noise_temp.Pol1Sb2YFactor),
            )
            if band in [9, 10]:
                item = {
                    "FreqLO": noise_temp.FreqLO,
                    "CenterIF": noise_temp.CenterIF,
                    "Pol0S1": yToTemp(noise_temp, noise_temp.Pol0Sb1YFactor),
                    "Pol1S1": yToTemp(noise_temp, noise_temp.Pol1Sb1YFactor),
                    "TAmbient": noise_temp.TAmbient,
                    "TColdLoad": noise_temp.TColdLoad,
                }
            elif band in [3, 4, 5, 6, 7, 8]:
                item = {
                    "FreqLO": noise_temp.FreqLO,
                    "CenterIF": noise_temp.CenterIF,
                    "Pol0S1": yToTemp(noise_temp, noise_temp.Pol0Sb1YFactor),
                    "Pol0S2": yToTemp(noise_temp, noise_temp.Pol0Sb2YFactor),
                    "Pol1S1": yToTemp(noise_temp, noise_temp.Pol1Sb1YFactor),
                    "Pol1S2": yToTemp(noise_temp, noise_temp.Pol1Sb2YFactor),
                    "TAmbient": noise_temp.TAmbient,
                    "TColdLoad": noise_temp.TColdLoad,
                }
        else:
            max_y = max(
                max_y,
                noise_temp.Pol0Sb1YFactor,
                noise_temp.Pol0Sb2YFactor,
                noise_temp.Pol1Sb1YFactor,
                noise_temp.Pol1Sb2YFactor,
            )
            if band in [9, 10]:
                item = {
                    "FreqLO": noise_temp.FreqLO,
                    "CenterIF": noise_temp.CenterIF,
                    "Pol0S1": noise_temp.Pol0Sb1YFactor,
                    "Pol1S1": noise_temp.Pol1Sb1YFactor,
                }
            elif band in [3, 4, 5, 6, 7, 8]:
                item = {
                    "FreqLO": noise_temp.FreqLO,
                    "CenterIF": noise_temp.CenterIF,
                    "Pol0S1": noise_temp.Pol0Sb1YFactor,
                    "Pol0S2": noise_temp.Pol0Sb2YFactor,
                    "Pol1S1": noise_temp.Pol1Sb1YFactor,
                    "Pol1S2": noise_temp.Pol1Sb2YFactor,
                }
        data[-1].append(item)
    if temp:
        max_y = math.ceil(max_y / 100.0) * 100.0
    else:
        max_y = math.ceil(max_y / 5.0) * 5.0
    result = {
        "minFreq": min_freq,
        "maxFreq": max_freq,
        "minY": min_y,
        "maxY": max_y,
        "band": band,
        "data": data,
    }
    return result
