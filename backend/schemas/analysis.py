from pydantic import BaseModel
from datetime import datetime


class AnalysisBase(BaseModel):
    filename: str
    language: str
    analysis_result: str


class AnalysisResponse(AnalysisBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True