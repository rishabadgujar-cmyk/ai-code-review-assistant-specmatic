function RepositoryInput({
  repoUrl,
  setRepoUrl,
  analyzeRepository
}) {

  return (

    <>

      <input
        type="text"
        className="repo-input"
        placeholder="Paste GitHub Repository URL..."
        value={repoUrl}
        onChange={(e) =>
          setRepoUrl(e.target.value)
        }
      />

      <br />
      <br />

      <button
        onClick={analyzeRepository}
      >
        Analyze Repository
      </button>

    </>

  );

}

export default RepositoryInput;