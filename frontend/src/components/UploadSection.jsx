function UploadSection({
  getRootProps,
  getInputProps,
  isDragActive,
  file,
  uploadFile
}) {

  return (

    <>

      <br />
      <br />

      <div
        {...getRootProps()}
        className="dropzone"
      >

        <input
          {...getInputProps()}
        />

        {isDragActive ? (

          <p>
            Drop the file here...
          </p>

        ) : (

          <>

            <h3>
              Drag & Drop Code File
            </h3>

            <p>
              or click to browse
            </p>

            {file && (

              <p className="filename">

                Selected:
                {" "}
                {file.name}

              </p>

            )}

          </>

        )}

      </div>

      <br />

      <button
        onClick={uploadFile}
      >
        Review Code
      </button>

    </>

  );

}

export default UploadSection;