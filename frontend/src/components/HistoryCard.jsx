function HistoryCard({ analysis }) {

    const result = JSON.parse(analysis.analysis_result);

    return (

        <div className="review-box">

            <h2>{analysis.filename}</h2>

            <p>
                <strong>Language:</strong> {analysis.language}
            </p>

            <p>
                <strong>Created:</strong> {analysis.created_at}
            </p>

            <p>
                <strong>Score:</strong> {result.score}
            </p>

            <p>
                {result.summary}
            </p>

        </div>

    );

}

export default HistoryCard;