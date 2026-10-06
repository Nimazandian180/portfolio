import { Asterisk } from "./icons";
export function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-top">
        <span>Form meets function.</span>
        <span>NZ / STUDIO</span>
      </div>
      <div className="art-composition">
        <div className="tile tile-ink">
          <span>n.</span>
          <i />
        </div>
        <div className="tile tile-lines">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="tile tile-orange">
          <Asterisk />
        </div>
        <div className="tile tile-circle">
          <span />
        </div>
      </div>
      <div className="art-bottom">
        <span>Built to feel simple.</span>
        <span className="art-cross">+</span>
      </div>
    </div>
  );
}
export function ProjectArtwork({ kind }: { kind: string }) {
  if (kind === "shop")
    return (
      <div className="project-art shop-art" aria-hidden="true">
        <div className="shop-word">
          shop<span>.</span>
        </div>
        <div className="shop-stamp">MCI</div>
        <div className="shopping-bag">
          <div className="bag-handle" />
          <Asterisk />
          <span>
            Something
            <br />
            worth finding.
          </span>
        </div>
        <div className="shop-ticket">
          <span>Browse.</span>
          <span>Choose.</span>
          <span>Enjoy.</span>
          <div className="ticket-barcode" />
        </div>
      </div>
    );
  return (
    <div className="project-art phantom-art" aria-hidden="true">
      <div className="phantom-orbit orbit-one" />
      <div className="phantom-orbit orbit-two" />
      <div className="phantom-word">
        phantom<span>_</span>
      </div>
      <div className="api-line">
        <span>REQUEST</span>
        <i />
        <span>RESPONSE</span>
      </div>
      <div className="code-slip">
        <span className="code-method">GET</span>
        <span>/your-next-idea</span>
        <span className="code-status">200 OK</span>
        <pre>{'{\n  "possibilities": "open",\n  "ready": true\n}'}</pre>
      </div>
      <div className="phantom-note">Less waiting. More building.</div>
    </div>
  );
}
