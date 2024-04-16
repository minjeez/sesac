from fastapi import APIRouter, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse

router = APIRouter()
templates = Jinja2Templates(directory="templates")

@router.get('/selectmodel', response_class=HTMLResponse, tags=["Select Model"])
async def select_model(request: Request):
    # Render the selectmodel.html template
    return templates.TemplateResponse("selectmodel.html", {"request": request})