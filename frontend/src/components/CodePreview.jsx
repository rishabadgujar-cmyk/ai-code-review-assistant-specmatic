import {
  Prism as SyntaxHighlighter
} from "react-syntax-highlighter";

import {
  vscDarkPlus
} from "react-syntax-highlighter/dist/esm/styles/prism";

function CodePreview({ codePreview }) {

  return (

    <div className="preview-box">

      <h2>

        Code Preview

      </h2>

      <SyntaxHighlighter
        language="python"
        style={vscDarkPlus}
        showLineNumbers
        wrapLongLines={true}
        customStyle={{
          borderRadius: "20px",
          padding: "25px",
          fontSize: "15px",
          background: "#0f172a",
          border:
            "1px solid rgba(255,255,255,0.08)"
        }}
      >

        {codePreview}

      </SyntaxHighlighter>

    </div>

  );

}

export default CodePreview;