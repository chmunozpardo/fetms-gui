from app.models.basemodel import *


class FE_ConfigLink(BaseModel):
    keyId = IntegerField(primary_key=True)
    fkFE_ComponentFacility = IntegerField()
    fkFE_Components = IntegerField()
    fkFE_ConfigFacility = IntegerField()
    fkFE_Config = IntegerField()
    Quantity = IntegerField()
    TS = TimestampField()

    class Meta:
        orm_mode = True
        db_table = "FE_ConfigLink"

