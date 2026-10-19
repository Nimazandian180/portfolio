export function ProjectArtwork({ kind }: { kind: string }) {
  return (
    <div className={`project-art art-${kind}`} aria-hidden="true">
      {kind === "shop" ? (
        <>
          <span className="project-art-word">
            MCI<span>SHOP</span>
          </span>
          <div className="art-stack">
            <i />
            <i />
            <i />
          </div>
        </>
      ) : kind === "phantom" ? (
        <>
          <span className="project-art-word">
            phantom<span>API WORKSPACE</span>
          </span>
          <div className="terminal">
            <span>GET /possibilities</span>
            <code>{'{ "ready": true }'}</code>
            <b>
              200 OK <i />
            </b>
          </div>
        </>
      ) : kind === "ava" ? (
        <>
          <span className="project-art-word">
            ava<span>SOUND IN MOTION</span>
          </span>
          <div className="waveform">
            {Array.from({ length: 25 }, (_, i) => (
              <i
                key={i}
                style={{ height: `${22 + Math.sin(i * 1.8) ** 2 * 72}%` }}
              />
            ))}
          </div>
        </>
      ) : kind === "inbox" ? (
        <>
          <span className="project-art-word">
            inbox<span>MY MESSAGES</span>
          </span>
          <div className="message-art">
            <i />
            <i />
            <i />
          </div>
        </>
      ) : kind === "sport" ? (
        <>
          <span className="project-art-word">
            SPORT<span>ZAREBIN</span>
          </span>
          <div className="sport-art">
            <i />
            <b>VS</b>
            <i />
          </div>
        </>
      ) : kind === "shahdaei" ? (
        <>
          <span className="project-art-word">
            Shahdaei<span>PERSONAL PORTFOLIO</span>
          </span>
          <div className="initial-art">S.</div>
        </>
      ) : (
        <>
          <span className="project-art-word">
            bubble<span>PLAY IN THE BROWSER</span>
          </span>
          <div className="bubble-art">
            <i />
            <i />
            <i />
            <i />
          </div>
        </>
      )}
    </div>
  );
}
