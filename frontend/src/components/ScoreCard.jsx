function ScoreCard({ score }) {

  let scoreColor = "#22c55e";

  if (score < 80)
    scoreColor = "#eab308";

  if (score < 60)
    scoreColor = "#f97316";

  if (score < 40)
    scoreColor = "#ef4444";


  return (

    <div className="score-card">

      <h2>

        AI Quality Score

      </h2>

      <div
        className="score-circle"
        style={{
          border: `8px solid ${scoreColor}`
        }}
      >

        {score}

      </div>

    </div>

  );

}

export default ScoreCard;