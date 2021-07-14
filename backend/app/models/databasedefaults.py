from .basemodel import *


class DatabaseDefaults(BaseModel):
    DefaultFacility = IntegerField()

    class Meta:
        orm_mode = True
        db_table = 'DatabaseDefaults'
        primary_key = False
