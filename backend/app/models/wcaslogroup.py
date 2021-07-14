from .basemodel import *


class WCAsLOgroup(BaseModel):
    keyWCAsLOGroup = IntegerField()
    Band = TextField()
    SN = TextField()
    ESN = TextField()
    Notes = TextField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = 'WCAsLOgroup'
        primary_key = False
