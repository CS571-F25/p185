export default function Scheduler() {
  return (
    <div className="page">
      <h2>Let’s Talk</h2>
      <p className="subtitle">
        Want to chat about ideas, startups, or collaboration?
      </p>

      <div className="scheduler-card">
        <p className="scheduler-lead">
          If something here resonated, I’d love to connect.
        </p>

        <p className="scheduler-body">
          You can book a 30-minute conversation directly below.
        </p>

        <div className="calendly-embed">
          <iframe
            src="https://calendly.com/sidvsingh25/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            width="100%"
            height="700"
            frameBorder="0"
            title="Calendly Scheduler"
          />
        </div>
      </div>
    </div>
  );
}
