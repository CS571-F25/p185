import { Card } from "react-bootstrap";

export default function ProjectCard({ title, description, tag, link }) {
  return (
    <Card style={{ margin: "20px auto", width: "80%" }}>
      <Card.Body>
        <Card.Title>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </Card.Title>

        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>{tag}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
