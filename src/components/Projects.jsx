import ProjectCard from "./ProjectCard";

export default function Projects({ view }) {
  return (
    <div className="page">
      {view === "professional" ? (
        <>
          <h2>Projects & Ventures</h2>

          <ProjectCard
            title="MottoNote"
            link="https://www.mottonote.app/"
            description="AI assistant for real-time context retrieval and collaboration."
            tag="Startup • CEO"
          />

          <ProjectCard
            title="EduExplorer"
            description="Mentorship platform connecting university mentors with high school students."
            tag="Education Tech"
          />

          <ProjectCard
            title="MealMates"
            description="Food redistribution MVP using interviews with students and dining staff."
            tag="Sustainability"
          />

          <ProjectCard
            title="Campus Path Finder"
            description="Dijkstra-based shortest path routing across UW–Madison."
            tag="Algorithms"
          />

          <ProjectCard
            title="iSongly"
            description="Red-Black tree backend for fast song search by metadata."
            tag="Data Structures"
          />
        </>
      ) : (
        <>
          <h2>Outside of Work</h2>

          <ProjectCard
            title="Gym"
            description="My non-negotiable. Lifting keeps me disciplined, focused, and grounded."
            tag="Health • Discipline"
          />

          <ProjectCard
            title="Cooking"
            description="I like experimenting in the kitchen—especially desserts. Current obsession: homemade Biscoff pudding."
            tag="Creative Outlet"
          />

          <ProjectCard
            title="Hiking"
            description="Getting outside helps me reset. Quiet trails, long walks, and time to think without notifications."
            tag="Outdoors • Clarity"
          />
        </>
      )}
    </div>
  );
}
