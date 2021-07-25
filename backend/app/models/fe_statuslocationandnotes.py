from app.models.basemodel import *


class FE_StatusLocationAndNotes(BaseModel):
    keyFacility = IntegerField()
    keyId = IntegerField()
    fkFEComponents = IntegerField()
    fkFEConfig = IntegerField()
    fkLocationNames = IntegerField()
    fkStatusType = IntegerField()
    TS = TimestampField()
    Notes = TextField()
    lnk_Data = TextField()
    Updated_By = TextField()

    class Meta:
        orm_mode = True
        db_table = "FE_StatusLocationAndNotes"
        primary_key = CompositeKey("keyFacility", "keyId")
