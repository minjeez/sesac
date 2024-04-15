from fastapi import APIRouter, Depends, Form
from sqlalchemy.orm import Session

import domain.subscribe.database as database
from domain.subscribe.schema import SubscriptionCreate
import domain.subscribe.models as models

from typing import Optional


engine = database.engineconnect()
session = engine.sessionmaker()

def get_db():    
    try:
        yield session
    finally:
        session.close()

router = APIRouter()

# 구독 정보 생성 엔드포인트
# @app.post("/subscribe")
@router.post("/")
async def create_subscription(email: str = Form(...), 
                                name: str = Form(...), 
                                age: str = Form(...), 
                                gender: str = Form(...), 
                                favorite_celebrity: Optional[str] = Form(None), 
                                db: Session = Depends(get_db)):
    subscription_data = SubscriptionCreate(email=email, 
                                            name=name, 
                                            age=age, 
                                            gender=gender, 
                                            favorite_celebrity=favorite_celebrity)
    db_subscription = models.Subscription(**subscription_data.dict())
    db.add(db_subscription)
    db.commit()
    db.refresh(db_subscription)
    return db_subscription

# 모든 구독 정보 확인.
###########
# 인코딩 문제.
###########
# @router.get("/subscriptions")
# async def read_subscriptions(db: Session = Depends(get_db)):
#     return session.query(models.Subscription).all()