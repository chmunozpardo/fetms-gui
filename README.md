Personal development of a GUI for the FETMS.

It consist of four Docker containers:
 - MySQL 5.7 for the database
 - Python using FastAPI + peewee for the backend
 - Redis for the backend cache. Not used at the moment, but can be used using the decorator `@cache` from `fastapi-redis-cache`.
 - ReactJS for the frontend

Progress so far:
 - **Backend**
   - Can retrieve the list of FrontEnds for the last `FE_Config`
   - Can retrieve the list of Noise Temperature, Workmanship Amplitude and Beam Pattern measurements for a given `FE_Config` and `Band`
   - Can retrieve the data from a Noise Temperature, Workmanship Amplitude and Beam Pattern measurement given a `TestData_header` `keyId`
 - **Frontend**
   - Can display the list of FrontEnds for the last `FE_Config`
   - Can display the list of Noise Temperature, Workmanship Amplitude and Beam Pattern measurements for a given `FE_Config` and `Band`
   - Can display the data from a Noise Temperature, Workmanship Amplitude and Beam Pattern measurement given a `TestData_header` `keyId`
