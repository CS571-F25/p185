export default function ToggleView({ view, setView }) {
  const isProfessional = view === "professional";

  const toggle = () => {
    setView(isProfessional ? "personal" : "professional");
  };

  return (
    <div className="toggle-wrapper">
      <span className={`toggle-label ${isProfessional ? "active" : ""}`}>
        Professional
      </span>

      <button
        className={`toggle-switch ${isProfessional ? "on" : "off"}`}
        onClick={toggle}
        aria-label="Toggle view"
      >
        <span className="toggle-knob" />
      </button>

      <span className={`toggle-label ${!isProfessional ? "active" : ""}`}>
        Personal
      </span>
    </div>
  );
}
