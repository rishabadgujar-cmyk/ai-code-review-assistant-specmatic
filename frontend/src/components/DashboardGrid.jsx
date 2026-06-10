import AnalysisCard from "./AnalysisCard";

function DashboardGrid({
  bugs,
  security,
  performance,
  bestPractices,
}) {

  return (

    <div className="dashboard-grid">

      <AnalysisCard
        title="🐞 Bugs"
        data={bugs}
      />

      <AnalysisCard
        title="🛡 Security"
        data={security}
      />

      <AnalysisCard
        title="⚡ Performance"
        data={performance}
      />

      <AnalysisCard
        title="✅ Best Practices"
        data={bestPractices}
      />

    </div>

  );

}

export default DashboardGrid;