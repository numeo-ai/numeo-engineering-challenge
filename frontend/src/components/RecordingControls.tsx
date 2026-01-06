export default function RecordingControls({
  isRecording,
  isPaused,
  onStart,
  onStop,
  onPause,
  onResume,
  disabled = false
}: any) {
  if (!isRecording) {
    return (
      <div className="d-flex justify-content-center my-4">
        <button
          className="btn btn-primary btn-lg"
          onClick={onStart}
          disabled={disabled}
        >
          <i className="bi bi-mic-fill me-2"></i>Start Recording
        </button>
      </div>
    )
  }

  return (
    <div className="my-4">
      <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
        <span className="badge bg-danger">
          <i className="bi bi-record-circle-fill me-1"></i>Recording...
        </span>
      </div>
      <div className="d-flex justify-content-center gap-2">
        {isPaused ? (
          <button
            className="btn btn-success"
            onClick={onResume}
            disabled={disabled}
          >
            <i className="bi bi-play-fill me-1"></i>Resume
          </button>
        ) : (
          <button
            className="btn btn-warning"
            onClick={onPause}
            disabled={disabled}
          >
            <i className="bi bi-pause-fill me-1"></i>Pause
          </button>
        )}
        <button
          className="btn btn-danger"
          onClick={onStop}
          disabled={disabled}
        >
          <i className="bi bi-stop-fill me-1"></i>Stop
        </button>
      </div>
    </div>
  )
}
