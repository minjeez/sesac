# from fastapi import APIRouter, Request
# from fastapi.templating import Jinja2Templates
# from fastapi.responses import HTMLResponse

# router = APIRouter()

# # 템플릿 디렉터리 설정
# templates = Jinja2Templates(directory="templates")

# @router.get('/firstGame', response_class=HTMLResponse)
# async def about(request: Request):
#     return templates.TemplateResponse("firstGame.html", {"request": request})

from fastapi import APIRouter, Request
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel

router = APIRouter()
templates = Jinja2Templates(directory="arcana/templates")

class Input(BaseModel):
    name: str

@router.get('/firstGame')
async def first_game(request: Request): #, model: Input):
    # if model not in ['iu', 'cha', 'chunsik']:
        # Handle invalid model scenario (e.g., return error response)
        # return {"error": "Invalid model"}

    # Render the firstGame.html template with the specified model
    return templates.TemplateResponse("firstGame.html", {"request": request})
    # return templates.TemplateResponse("firstGame.html", {"request": request, "model": model})

    # input_dict = model.dict()
    # name = input_dict['name']
    # if name not in ['iu', 'cha', 'chunsik']: