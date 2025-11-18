import { ButtonGroup, ToggleButton } from "react-bootstrap";

export default function ToggleView({ view, setView }) {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <ButtonGroup>
        <ToggleButton
          id="prof-toggle"
          type="radio"
          variant="outline-primary"
          checked={view === "professional"}
          onClick={() => setView("professional")}
        >
          Professional View
        </ToggleButton>

        <ToggleButton
          id="personal-toggle"
          type="radio"
          variant="outline-secondary"
          checked={view === "personal"}
          onClick={() => setView("personal")}
        >
          Personal View
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
}
