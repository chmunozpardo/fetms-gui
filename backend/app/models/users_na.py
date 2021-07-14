from .basemodel import *


class Users_NA(BaseModel):
    keyId = IntegerField()
    keyFacility = IntegerField()
    Name = TextField()
    Initials = TextField()
    Email = TextField()

    class Meta:
        orm_mode = True
        db_table = 'Users_NA'
        primary_key = False
