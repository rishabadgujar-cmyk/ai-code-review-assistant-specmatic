function AnalysisCard({ title, data }) {

  return (

    <div className="analysis-card">

      <h3>
        {title} ({data.length})
      </h3>

      {data.map((item, index) => (

        <div
          key={index}
          className="issue-row"
        >

          <span
            className={`severity ${
              item.severity || "low"
            }`}
          >
            {(item.severity || "low").toUpperCase()}
          </span>

          {item.message || item}

        </div>

      ))}

    </div>

  );

}

export default AnalysisCard;