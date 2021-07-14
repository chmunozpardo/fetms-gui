from .basemodel import *


class Users(BaseModel):
    keyId = IntegerField()
    keyFacility = IntegerField()
    Name = TextField()
    Initials = TextField()
    Email = TextField()

    class Meta:
        orm_mode = True
        db_table = 'Users'
        primary_key = False
