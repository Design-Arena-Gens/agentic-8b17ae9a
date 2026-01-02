const seriesTitles = [
  "Case File Number AL-1994-072: Unresolved Missing - Allagash River Sector",
  "Incident Narrative Briefing 30YR-ALLAGASH: Summary of Evidence Intake",
  "Jurisdictional Report MSP-Northern-04: Wilderness Disappearance Review",
  "Case File Number AL-1994-072A: Supplementary Evidence Ledger",
  "Unresolved Missing Register Entry 42-ALLAGASH: Field Operations Digest",
  "Incident Narrative Addendum MSP-ALL-30YR: Terrain Search Synopsis",
  "Summary of Evidence Packet AL-30Y: Witness and Timeline Correlation",
  "Jurisdictional Report Update MSP-ROUTE11: Resource Deployment Log",
  "Case File Number AL-1994-072B: Evidence Tracking Overview",
  "Unresolved Missing Dossier MSP-ALL: Investigative Continuity Memorandum"
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="header">
        <div className="badge">Maine State Police</div>
        <h1>Allagash Wilderness Disappearance: Series Title Registry</h1>
        <p>
          Evidence-forward series nomenclature prepared for archival continuity
          and inter-agency review.
        </p>
      </header>

      <section className="folder">
        <div className="folder-tab">Confidential</div>
        <ol className="series-list">
          {seriesTitles.map((title) => (
            <li key={title}>
              <span className="series-code">{title}</span>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
