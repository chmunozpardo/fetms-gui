Personal development of a GUI for the FETMS.

It consist of four Docker containers:
 - MySQL 5.7 for the database
 - Python using FastAPI + peewee for the backend
 - Redis for the backend cache. Not used at the moment, but can be used using the decorator `@cache` from `fastapi-redis-cache`.
 - ReactJS for the frontend

Progress so far:
 - **Backend**
   - Can retrieve the list of FrontEnds for the last `FE_Config`
   - For a given `FE_Config` and `Band` can retrieve the list for:
     - Noise Temperature
     - Workmanship Amplitude
     - Beam Pattern
     - LO Locking
     - IF Spectrum
   - For a given a `TestData_header` `keyId` can retrieve the data for:
     - Noise Temperature
     - Workmanship Amplitude
     - Beam Pattern
     - LO Locking
     - IF Spectrum
 - **Frontend**
   - Can display the list of FrontEnds for the last `FE_Config`
   - For a given `FE_Config` and `Band` can display the list for:
     - Noise Temperature
     - Workmanship Amplitude
     - Beam Pattern
     - LO Locking
     - IF Spectrum
   - For a given a `TestData_header` `keyId` can display the data for
     - Noise Temperature
     - Workmanship Amplitude
     - Beam Pattern
     - LO Locking
     - IF Spectrum
