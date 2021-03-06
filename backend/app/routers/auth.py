import os
import jwt
from datetime import datetime, timedelta
from typing import Optional
from app.models.users import Users
from fastapi import APIRouter
from fastapi import Depends, HTTPException, status, Response, Request
from fastapi.encoders import jsonable_encoder
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from fastapi.openapi.models import OAuthFlows as OAuthFlowsModel
from fastapi.security.utils import get_authorization_scheme_param
from pydantic import BaseModel
from dotenv import load_dotenv
from playhouse.shortcuts import model_to_dict

load_dotenv()

ALGORITHM = os.getenv("ALGORITHM")
SECRET_KEY = os.getenv("SECRET_KEY")
ACCESS_TOKEN_EXPIRE_MINUTES = 30


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None


routerAuth = APIRouter(prefix="/authentication", tags=["authentication"])


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/authentication/token")


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def get_user(username: str):
    user = None
    try:
        user = Users.get((Users.Email == username))
    except Users.DoesNotExist:
        print("User does not exist")
    return user


async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("email")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except jwt.ExpiredSignatureError:
        raise credentials_exception
    user = get_user(username=token_data.username)
    if user is None:
        raise credentials_exception
    return user


@routerAuth.get("/me")
async def read_users_me(current_user: Users = Depends(get_current_user)):
    return model_to_dict(current_user)


@routerAuth.post("/token", response_model=Token)
async def login(response: Response, form_data: OAuth2PasswordRequestForm = Depends()):
    user_dict = get_user(form_data.username)
    if not user_dict:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"email": user_dict.Email, "name": user_dict.Name},
        expires_delta=access_token_expires,
    )

    return {"access_token": access_token, "token_type": "Bearer"}


@routerAuth.get("/logout")
async def logout(response: Response):
    response.delete_cookie(key="Authorization")
    return
