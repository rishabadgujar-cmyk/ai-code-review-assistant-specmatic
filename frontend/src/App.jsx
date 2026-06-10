import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

import ScoreCard from "./components/ScoreCard";
import DashboardGrid from "./components/DashboardGrid";
import CodePreview from "./components/CodePreview";
import RepositoryInput from "./components/RepositoryInput";
import UploadSection from "./components/UploadSection";
import DownloadReport from "./components/DownloadReport";
import IssuePieChart from "./components/charts/IssuePieChart";

function App() {

  const [file, setFile] = useState(null);
  const [repoUrl, setRepoUrl] = useState("");

  const [score, setScore] = useState(0);
  const [summary, setSummary] = useState("");

  const [bugs, setBugs] = useState([]);
  const [security, setSecurity] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [bestPractices, setBestPractices] = useState([]);

  const [loading, setLoading] = useState(false);
  const [codePreview, setCodePreview] = useState("");

  const onDrop = (acceptedFiles) => {

    if (acceptedFiles.length > 0) {

      const selectedFile = acceptedFiles[0];

      setFile(selectedFile);

      const reader = new FileReader();

      reader.onload = (event) => {

        setCodePreview(
          event.target.result
        );

      };

      reader.readAsText(selectedFile);

    }

  };

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({

    onDrop,

    multiple: false

  });

  const uploadFile = async () => {

    if (!file) {

      alert(
        "Please select a file"
      );

      return;

    }

    setLoading(true);

    const formData = new FormData();

    formData.append(
      "file",
      file
    );

    try {

      const response =
        await axios.post(

          "http://127.0.0.1:8000/upload",

          formData

        );

      console.log(
        response.data
      );

      setScore(
        response.data.score || 0
      );

      setSummary(
        response.data.summary || ""
      );

      setBugs(
        response.data.bugs || []
      );

      setSecurity(
        response.data.security || []
      );

      setPerformance(
        response.data.performance || []
      );

      setBestPractices(

        response.data.best_practices || []

      );

    }

    catch (error) {

      console.error(error);

      alert(
        "Upload failed"
      );

    }

    setLoading(false);

  };


  const analyzeRepository = async () => {

    if (!repoUrl) {

      alert(
        "Please enter a GitHub repository URL"
      );

      return;

    }

    setLoading(true);

    try {

      const response =
        await axios.post(

          "http://127.0.0.1:8000/repository",

          {
            repo_url: repoUrl
          }

        );

      console.log(
        response.data
      );

      setScore(
        response.data.score || 0
      );

      setSummary(
        response.data.summary || ""
      );

      setBugs(
        response.data.bugs || []
      );

      setSecurity(
        response.data.security || []
      );

      setPerformance(
        response.data.performance || []
      );

      setBestPractices(

        response.data.best_practices || []

      );

    }

    catch (error) {

      console.error(error);

      alert(
        "Repository analysis failed"
      );

    }

    setLoading(false);

  };



  return (

    <div className="app">

      <div className="hero">

        <h1>

          AI Code Review Assistant

        </h1>

        <p className="subtitle">

          Enterprise-grade AI powered code analysis

        </p>

        <div className="upload-card">

          <RepositoryInput

            repoUrl={repoUrl}

            setRepoUrl={setRepoUrl}

            analyzeRepository={analyzeRepository}

          />

          <UploadSection

            getRootProps={getRootProps}

            getInputProps={getInputProps}

            isDragActive={isDragActive}

            file={file}

            uploadFile={uploadFile}

          />

        </div>

      </div>



      {codePreview && (

        <CodePreview

          codePreview={codePreview}

        />

      )}



      {loading && (

        <div className="loading">

          Reviewing code...

        </div>

      )}



      {score > 0 && (

        <>

          <ScoreCard

            score={score}

          />


          <DownloadReport

  score={score}

  summary={summary}

  bugs={bugs}

  security={security}

  performance={performance}

  bestPractices={bestPractices}

/>



          <div className="review-box">

            <h2>

              Executive Summary

            </h2>

            <p>

              {summary}

            </p>

          </div>



          <DashboardGrid

            bugs={bugs}

            security={security}

            performance={performance}

            bestPractices={bestPractices}

        
          />
        <div className="review-box">

  <h2>

    Issue Distribution

  </h2>

  <IssuePieChart

    bugs={bugs}

    security={security}

    performance={performance}

    bestPractices={bestPractices}

  />

</div>
        </>

      )}

    </div>

  );

}

export default App;