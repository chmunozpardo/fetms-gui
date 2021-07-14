from .basemodel import *


class Locations(BaseModel):
    keyId = IntegerField(primary_key=True)
    Description = TextField()
    Notes = TextField()

    class Meta:
        orm_mode = True
        db_table = 'Locations'

