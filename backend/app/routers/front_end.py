from typing import Optional
from fastapi import APIRouter
from peewee import JOIN
from app.models.fe_configlink import FE_ConfigLink
from app.models.fe_statuslocationandnotes import FE_StatusLocationAndNotes
from app.models.testdata_header import TestData_header
from app.models.noise_temp_subheader import Noise_Temp_SubHeader
from app.models.noise_temp import Noise_Temp
from app.models.fe_components import FE_Components
from app.models.componenttypes import ComponentTypes
from playhouse.shortcuts import model_to_dict
from fastapi_redis_cache import cache

routerFrontEnd = APIRouter(
    prefix="/front_end",
    tags=["front_end"]
)


@routerFrontEnd.get("/components/list", summary="List of Front Ends")
async def getFrontEndComponents(config: int, band: Optional[str] = None):
    result = []
    FE_COMP = FE_Components.alias()
    COMP = ComponentTypes.alias()
    FE_CL = FE_ConfigLink.alias()
    opt = None
    if band is None or band == "components":
        opt = FE_COMP.Band.is_null(True)
    else:
        opt = FE_COMP.Band == band

    query = FE_COMP.select(FE_COMP, COMP, FE_CL) \
        .join(COMP, join_type=JOIN.LEFT_OUTER, on=(FE_COMP.fkFE_ComponentType == COMP.keyId)) \
        .switch(FE_COMP) \
        .join(FE_CL, join_type=JOIN.LEFT_OUTER, on=(FE_COMP.keyId == FE_CL.fkFE_Components)) \
        .where((opt) & (FE_CL.fkFE_Config == config))
    for component in query:
        item = {
            "SN": component.SN,
            "ESN1": component.ESN1,
            "ESN2": component.ESN2,
            "Notes": component.Notes,
            "Component": component.componenttypes.Description,
            "Docs": component.componenttypes.Docs,
            "TS": component.fe_configlink.TS,
        }
        result.append(item)
    return result
