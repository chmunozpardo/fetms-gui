from fastapi import APIRouter
from peewee import fn
from app.models.front_ends import Front_Ends
from app.models.fe_config import FE_Config
from app.models.fe_statuslocationandnotes import FE_StatusLocationAndNotes
from playhouse.shortcuts import model_to_dict

routerFrontEnds = APIRouter(prefix="/front_ends", tags=["front_ends"])


@routerFrontEnds.get("/all", summary="List of Front Ends")
async def getAllFrontEnds():
    result = []
    FE = Front_Ends.alias()
    query = FE.select().order_by(FE.SN.asc())
    for front_end in query:
        result.append(model_to_dict(front_end))
    return result


@routerFrontEnds.get("/full", summary="List of Front Ends")
async def getFullFrontEnds():
    result = []
    FE = Front_Ends.alias()
    FE_C = FE_Config.alias()
    FE_SLN = FE_StatusLocationAndNotes.alias()

    # We get the list of Front Ends in ascending order w.r.t. SN
    query_fe = FE.select(FE.keyFrontEnds, FE.SN, FE.Docs).order_by(FE.SN.asc())

    # We iterate over each Front End
    # !This was faster than doing everything in one single query
    for fe in query_fe:
        # We get this last Config for this Front End
        query_config = FE_C.select(fn.MAX(FE_C.keyFEConfig)).where(
            FE_C.fkFront_Ends == fe.keyFrontEnds
        )
        # We get the last Status, Location and Notes
        query_sln = (
            FE_SLN.select()
            .where(FE_SLN.fkFEConfig == query_config.scalar())
            .order_by(FE_SLN.keyId.desc())
            .get()
        )
        # We prepare the result
        item = {
            "config": query_config.scalar(),
            "keyFacility": query_sln.keyFacility,
            "SN": fe.SN,
            "TS": query_sln.TS,
            "Docs": fe.Docs,
            "Notes": query_sln.Notes,
        }
        result.append(item)
    return result
