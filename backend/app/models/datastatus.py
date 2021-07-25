from app.models.basemodel import *


class DataStatus(BaseModel):
    keyId = IntegerField(primary_key=True)
    Description = TextField()

    class Meta:
        orm_mode = True
        db_table = "DataStatus"

