from .basemodel import *


class TestData_Types(BaseModel):
    keyId = IntegerField(primary_key=True)
    TestData_TableName = TextField()
    Description = TextField()

    class Meta:
        orm_mode = True
        db_table = 'TestData_Types'

