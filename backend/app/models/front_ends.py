from .basemodel import *


class Front_Ends(BaseModel):
    keyFacility = IntegerField()
    keyFrontEnds = IntegerField()
    TS = TimestampField()
    SN = IntegerField()
    ESN = TextField()
    Docs = TextField()
    Notes = TextField()
    Description = TextField()

    class Meta:
        orm_mode = True
        db_table = 'Front_Ends'
        primary_key = CompositeKey('keyFacility', 'keyFrontEnds')
