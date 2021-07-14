from .basemodel import *


class ComponentTypes(BaseModel):
    keyId = IntegerField(primary_key=True)
    ProductTreeNumber = TextField()
    Description = TextField()
    Docs = TextField()

    class Meta:
        orm_mode = True
        db_table = 'ComponentTypes'

