import ProjectCard from "./ProjectCard";

export default function Projects({ view }) {
  return (
    <div className="page">
      <h2>Projects & Ventures</h2>

      <ProjectCard
        title="MottoNote"
        description="AI meeting assistant with real-time transcription, summarization, and context-aware collaboration."
        link="https://www.mottonote.app/"
        tag={view === "professional" ? "Startup • CEO" : "AI / Collaboration Tool"}
      />

      <ProjectCard
        title="EduExplorer"
        description="Mentorship platform pairing university mentors with high school students; completed 30+ paid sessions."
        tag={view === "professional" ? "Startup" : "Education Project"}
      />

      <ProjectCard
        title="MealMates"
        description="Designed MVP to redistribute unused dining hall food; supported by 60+ interviews and campus collaboration."
        tag={view === "professional" ? "Lean Startup" : "Sustainability Project"}
      />

      <ProjectCard
        title="Campus Path Finder"
        description="Java system using Dijkstra's algorithm to compute shortest paths across UW–Madison."
        tag={view === "professional" ? "Algorithms" : "Class Project"}
      />

      <ProjectCard
        title="iSongly"
        description="Red-Black Tree backend enabling fast song search and metadata queries in O(log n)."
        tag={view === "professional" ? "Backend" : "Data Structures Project"}
      />
    </div>
  );
}
