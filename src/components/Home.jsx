export default function Home({ view }) {
  return (
    <div className="page">
      <div className="card-soft">
        <h1>Hello, I’m Siddharth Singh.</h1>

        {view === "professional" ? (
          <>
            <p>
              I’m a student founder and product builder working across AI,
              collaboration tools, and campus innovation ecosystems.
            </p>
            <p>
              I’m the Co-Founder & CEO of <strong>MottoNote</strong>, a real-time
              AI meeting assistant built for faster decision-making and better
              team alignment.
            </p>
            <p>
              I also serve as President of Transcend UW, supporting student
              founders and running large-scale campus programs.
            </p>
          </>
        ) : (
          <>
            <p>
              Outside of startups, I care a lot about discipline, creativity,
              and staying grounded.
            </p>
            <p>
              The gym keeps me consistent, cooking lets me experiment (Biscoff
              pudding has become a problem), and hiking helps me reset when
              things get noisy.
            </p>
            <p>
              I like building things — not just products, but routines and
              systems that compound over time.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
