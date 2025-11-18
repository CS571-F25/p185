export default function AboutMe({ view }) {
  return (
    <div className="page">
      <h2>About Me</h2>

      {view === "professional" ? (
        <p>
          I’m a Computer Science student at UW–Madison with a minor in Entrepreneurship.
          My work spans AI product development, startup building, and designing systems
          that help people collaborate better. I’ve co-founded ventures including
          MottoNote and EduExplorer, and led Transcend UW’s campus-wide innovation efforts.
        </p>
      ) : (
        <p>
          When I’m not working on startups, I explore AI, design, cybersecurity, and
          creative writing. I like building little tools, mapping ideas, and following
          curiosity wherever it leads. I also enjoy meeting people and learning how
          different builders think.
        </p>
      )}
    </div>
  );
}
