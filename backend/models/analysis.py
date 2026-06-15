from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from database import Base
from sqlalchemy import ForeignKey


class Analysis(Base):
    __tablename__ = "analyses"

    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String)
    language = Column(String)
    analysis_result = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)