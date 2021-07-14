from .basemodel import *


class FE_Config(BaseModel):
    keyFacility = IntegerField()
    keyFEConfig = IntegerField()
    fkFront_Ends = IntegerField()
    TS = TimestampField()
    Description = TextField()

    class Meta:
        orm_mode = True
        db_table = 'FE_Config'
        primary_key = CompositeKey('keyFacility', 'keyFEConfig')
