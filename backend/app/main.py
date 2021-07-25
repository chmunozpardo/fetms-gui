import os
from app.routers import (
    front_ends,
    health_check,
    noise_temperature,
    front_end,
    test_data,
    workmanship_amplitude,
    beam_pattern,
    lo_locking,
    if_spectrum,
)
from app.routers import auth
from app.database import conn
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi_redis_cache import FastApiRedisCache
from dotenv import load_dotenv

load_dotenv()

LOCAL_REDIS_URL = os.getenv("LOCAL_REDIS_URL")

app = FastAPI(title="Contact.ly", description="APIs for contact Apis", version="0.1")
app.include_router(auth.routerAuth)
app.include_router(test_data.routerTestData)
app.include_router(front_end.routerFrontEnd)
app.include_router(front_ends.routerFrontEnds)
app.include_router(lo_locking.routerLOLocking)
app.include_router(if_spectrum.routerIFSpectrum)
app.include_router(health_check.routerHealthCheck)
app.include_router(beam_pattern.routerBeamPattern)
app.include_router(noise_temperature.routerNoiseTemperature)
app.include_router(workmanship_amplitude.routerWorkmanshipAmplitude)


origins = [
    "http://localhost:3000",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    print("Connecting...")
    redis_cache = FastApiRedisCache()
    redis_cache.init(
        host_url=os.environ.get("REDIS_URL", LOCAL_REDIS_URL),
        prefix="myapi-cache",
        response_header="X-MyAPI-Cache",
        ignore_arg_types=[Request, Response],
    )
    if conn.is_closed():
        conn.connect()
