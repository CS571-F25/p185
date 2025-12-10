export default function AboutMe({ view }) {
  const isProfessional = view === "professional";

  return (
    <div className="page">
      <h2>About Me</h2>
      <p className="subtitle">
        {isProfessional
          ? "How I think, work, and build professionally"
          : "How I live, recharge, and stay grounded"}
      </p>

      <div className="about-card">
        {isProfessional ? (
          <>
            <p className="about-lead">
              I’m a builder who enjoys turning ambiguity into structured,
              scalable systems.
            </p>

            <p className="about-body">
              I care deeply about clarity, fast execution, and designing products
              that compound in value over time — whether that’s software, teams,
              or communities.
            </p>

            <p className="about-body">
              Most of my work sits at the intersection of product, engineering,
              and leadership. I like shipping early, learning from real users,
              and iterating with intent rather than over-polishing upfront.
            </p>
          </>
        ) : (
          <>
            <p className="about-lead">
              Outside of work, I’m big on routines that keep me balanced and
              energized.
            </p>

            <p className="about-body">
              I spend a lot of time at the gym, experimenting in the kitchen
              (current obsession: biscoff pudding), and getting outdoors whenever
              I can.
            </p>

            <p className="about-body">
              Hiking helps me reset, cooking lets me be creative without a
              deadline, and staying active keeps me disciplined. Those habits
              quietly shape how I show up in my work.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
