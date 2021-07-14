from .basemodel import *


class FE_Components(BaseModel):
    keyFacility = IntegerField()
    keyId = IntegerField()
    fkFE_ComponentType = IntegerField()
    SN = TextField()
    ESN1 = TextField()
    ESN2 = TextField()
    Band = IntegerField()
    Docs = TextField()
    Link1 = TextField()
    Link2 = TextField()
    Production_Status = TextField()
    Notes = TextField()
    Description = TextField()
    DocumentTitle = TextField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = 'FE_Components'
        primary_key = CompositeKey('keyFacility', 'keyId')
