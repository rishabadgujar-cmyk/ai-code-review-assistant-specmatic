import { jsPDF } from "jspdf";

function DownloadReport({
  score,
  summary,
  bugs,
  security,
  performance,
  bestPractices,
}) {

  const generatePDF = () => {

    const doc = new jsPDF();

    let y = 20;

    // Title
    doc.setFontSize(22);
    doc.setTextColor(0, 51, 102);

    doc.text(
      "AI CODE REVIEW REPORT",
      20,
      y
    );

    y += 10;

    // Date
    doc.setFontSize(11);
    doc.setTextColor(100);

    doc.text(
      `Generated: ${new Date().toLocaleString()}`,
      20,
      y
    );

    y += 20;

    // Score
    doc.setFontSize(18);
    doc.setTextColor(0);

    doc.text(
      `Overall Score: ${score}/100`,
      20,
      y
    );

    y += 20;

    // Summary
    doc.setFontSize(16);

    doc.text(
      "Executive Summary",
      20,
      y
    );

    y += 10;

    doc.setFontSize(12);

    doc.text(
      summary,
      20,
      y,
      {
        maxWidth: 170
      }
    );

    y += 30;

    const addSection = (
      title,
      items
    ) => {

      doc.setFontSize(15);

      doc.text(
        title,
        20,
        y
      );

      y += 10;

      doc.setFontSize(12);

      if (items.length === 0) {

        doc.text(
          "No issues found.",
          25,
          y
        );

        y += 15;

        return;
      }

      items.forEach((item) => {

        const message =
          item.message || item;

        doc.text(
          "• " + message,
          25,
          y,
          {
            maxWidth: 160
          }
        );

        y += 10;

      });

      y += 10;

    };

    addSection(
      "Bugs",
      bugs
    );

    addSection(
      "Security",
      security
    );

    addSection(
      "Performance",
      performance
    );

    addSection(
      "Best Practices",
      bestPractices
    );

    doc.save(
      "AI_Code_Review_Report.pdf"
    );

  };

return (

  <button
    className="download-btn"
    onClick={generatePDF}
  >

    Download Report

  </button>

);

}

export default DownloadReport;