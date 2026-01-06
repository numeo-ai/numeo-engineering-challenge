import { useEffect } from 'react'
import { useScribe } from '@elevenlabs/react'
import toastr from './utils/toastr'

function App() {
  const scribe = useScribe({
    modelId: 'scribe_v2_realtime',
    onPartialTranscript: () => {
    },
    onCommittedTranscript: () => {
    },
    onCommittedTranscriptWithTimestamps: () => {
    }
  })

  const handleStart = async () => {
    try {
      const res = await fetch('https://speech-to-text-ai-m7ex.vercel.app/scribe-token')
      const json = await res.json()
      if (!json.token) {
        toastr.error(json.error || 'Failed to get token')
        return
      }

      await scribe.connect({
        token: json.token,
        microphone: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      })
    } catch (e: any) {
      toastr.error(e?.message || 'Failed to start recording')
    }
  }

  const handleStop = () => {
    scribe.disconnect()
  }

  useEffect(() => {
    if (scribe.error) {
      toastr.error(String(scribe.error))
    }
  }, [scribe.error])

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow">
            <div className="card-body p-4">
              <header className="text-center mb-4">
                <h1 className="display-4 mb-2">
                  <i className="bi bi-mic-fill me-2"></i>Speech to Text
                </h1>
                <p className="text-muted">
                  <i className="bi bi-soundwave me-1"></i>
                  Real-time transcription with ElevenLabs
                </p>
              </header>

              <div className="d-flex justify-content-center gap-2 mb-3">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleStart}
                  disabled={scribe.isConnected}
                >
                  <i className="bi bi-mic-fill me-2"></i>Start Recording
                </button>
                <button
                  className="btn btn-danger btn-lg"
                  onClick={handleStop}
                  disabled={!scribe.isConnected}
                >
                  <i className="bi bi-stop-fill me-2"></i>Stop
                </button>
              </div>

              {scribe.isConnected && (
                <div className="d-flex justify-content-center mb-3">
                  <span className="badge bg-success">
                    <i className="bi bi-record-circle-fill me-1"></i>Recording...
                  </span>
                </div>
              )}

              {scribe.partialTranscript && (
                <div className="alert alert-info mt-3 mb-3">
                  <i className="bi bi-soundwave me-2"></i>
                  <strong>Listening:</strong> {scribe.partialTranscript}
                </div>
              )}

              {scribe.committedTranscripts.length > 0 && (
                <div className="mt-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>
                      <i className="bi bi-list-ul me-2"></i>
                      Transcriptions ({scribe.committedTranscripts.length})
                    </h3>
                  </div>
                  <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {scribe.committedTranscripts.map((t, index) => (
                      <div key={t.id || index} className="card mb-3">
                        <div className="card-body">
                          <p className="mb-2">{t.text}</p>
                          <small className="text-muted">
                            <i className="bi bi-clock me-1"></i>
                            {new Date().toLocaleTimeString()}
                          </small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!scribe.partialTranscript &&
                scribe.committedTranscripts.length === 0 && (
                  <div className="text-center text-muted py-5 mt-4">
                    <i className="bi bi-inbox fs-1 d-block mb-3"></i>
                    <p>
                      No transcriptions yet. Start recording to see your speech
                      converted to text!
                    </p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
