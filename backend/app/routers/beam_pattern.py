import sys
import math
from typing import Optional
from fastapi import APIRouter
from peewee import JOIN, fn
from app.models.scandetails import ScanDetails
from app.models.scansetdetails import ScanSetDetails
from app.models.beamlistings_nearfield import BeamListings_nearfield
from app.models.beamlistings_farfield import BeamListings_farfield
from playhouse.shortcuts import model_to_dict
from fastapi_redis_cache import cache


routerBeamPattern = APIRouter(prefix="/beam_pattern", tags=["beam_pattern"])


@routerBeamPattern.get("/results", summary="Result of Health Check")
async def getBeamPatternResults(keyheader: int):
    data_amp = []
    data_phase = []
    SSD = ScanSetDetails.alias()
    SD = ScanDetails.alias()
    BL_NF = BeamListings_farfield.alias()
    query = SSD.select().where((SSD.fkHeader == keyheader))
    ssd_keyid = query.get().keyId
    query = SD.select().where(SD.fkScanSetDetails == ssd_keyid)
    sd_keyid = query.get().keyId
    query = BL_NF.select(BL_NF).where(BL_NF.fkScanDetails == sd_keyid)
    min_x = sys.float_info.max
    max_x = -sys.float_info.max
    min_y = sys.float_info.max
    max_y = -sys.float_info.max
    min_amp = sys.float_info.max
    max_amp = -sys.float_info.max
    min_phase = sys.float_info.max
    max_phase = -sys.float_info.max
    total_points = 0
    for beam_pattern in query:
        total_points = total_points + 1
        temp_x = beam_pattern.x
        temp_y = beam_pattern.y
        temp_amp = beam_pattern.amp
        temp_phase = beam_pattern.phase
        min_x = min(min_x, temp_x)
        max_x = max(max_x, temp_x)
        min_y = min(min_y, temp_y)
        max_y = max(max_y, temp_y)
        min_amp = min(min_amp, temp_amp)
        max_amp = max(max_amp, temp_amp)
        min_phase = min(min_phase, temp_phase)
        max_phase = max(max_phase, temp_phase)
        data_amp.append({"x": temp_x, "y": temp_y, "value": temp_amp})
        data_phase.append({"x": temp_x, "y": temp_y, "value": temp_phase})

    max_amp = math.ceil(max_amp / 10.0) * 10.0
    min_amp = math.floor(min_amp / 10.0) * 10.0
    max_phase = math.ceil(max_phase / 10.0) * 10.0
    min_phase = math.floor(min_phase / 10.0) * 10.0
    result = {
        "xSize": math.sqrt(total_points),
        "ySize": math.sqrt(total_points),
        "minX": min_x,
        "maxX": max_x,
        "minY": min_y,
        "maxY": max_y,
        "minAmp": min_amp,
        "maxAmp": max_amp,
        "minPhase": min_phase,
        "maxPhase": max_phase,
        "dataAmp": data_amp,
        "dataPhase": data_phase,
    }
    return result
