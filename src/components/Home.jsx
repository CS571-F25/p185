export default function Home({ view }) {
  return (
    <div className="page">
      <h1>Hello, I'm Siddharth Singh.</h1>

      {view === "professional" ? (
        <>
          <p>
            I’m a student founder and product builder working across AI,
            collaboration tools, and campus innovation ecosystems.
          </p>

          <p>
            I’m the Co-Founder & CEO of <strong>MottoNote</strong>, a real-time AI
            meeting assistant built for fast decision-making and collaborative clarity.
          </p>

          <p>
            I also serve as President of Transcend UW, leading programs, events, and
            student founder support across campus.
          </p>
        </>
      ) : (
        <>
          <p>
            Outside of product work, I explore cybersecurity, AI tools, writing,
            and building small experiments that sharpen intuition.
          </p>

          <p>
            I enjoy working on creative projects, design explorations, and ideas
            that make student life and learning a bit more meaningful.
          </p>
        </>
      )}
    </div>
  );
}
