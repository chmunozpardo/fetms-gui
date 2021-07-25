from app.models.basemodel import *


class StatusTypes(BaseModel):
    keyStatusType = IntegerField(primary_key=True)
    Status = TextField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "StatusTypes"

