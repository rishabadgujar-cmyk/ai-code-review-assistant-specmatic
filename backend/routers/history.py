from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models.analysis import Analysis
from auth import get_current_user

router = APIRouter()


@router.get("/history")
def get_history(
    current_user: str = Depends(get_current_user),
    db: Session = Depends(get_db)
):

    analyses = (
        db.query(Analysis)
        .order_by(Analysis.created_at.desc())
        .all()
    )

    return analyses