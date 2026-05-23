import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  const hobbies = [
    "Coding",
    "Reading",
    "Design",
    "Learning English",
  ];

  return (
    <section className="about">
      <h2>About Me</h2>

      <p>
        I am passionate about web development and
        improving my programming skills.
      </p>

      {showMore && (
        <p>
          My goal is to become a professional full stack
          developer and build amazing projects.
        </p>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>

      <h3>Hobbies</h3>

      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;