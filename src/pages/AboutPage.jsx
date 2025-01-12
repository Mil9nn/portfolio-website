import Timeline from '../components/Timeline';

function AboutPage() {
  return (
    <div>
      <section className="about">
        <h2>About Me</h2>
        <div className="description">
          <p>I am an aspiring Full Stack Developer with a strong foundation in both front-end and back-end technologies. After earning my Bachelor&apos;s degree in Mechanical Engineering, I transitioned into the world of software development, where I have gained experience in HTML, CSS, JavaScript, React, Node.js, and other modern web development frameworks.</p>
          <p> With a keen interest in building intuitive, responsive, and scalable applications, I am eager to continue learning and growing in the field. I approach challenges with an analytical and solution-oriented mindset, striving to deliver high-quality results that meet both user needs and business goals.</p>
        </div>
        <h2>Skills</h2>
        <div className="skills">
          <div>
            <h4><i className="fas fa-cubes"></i>Programming</h4>
            <ul>
              <li>C (Data structures & Algorithms)</li>
            </ul>
          </div>
          <div>
            <h4>
              <i className="fas fa-laptop-code"></i>
              Front-End
            </h4>
            <ul>
              <li>HTML5 & CSS3</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Material UI</li>
            </ul>
          </div>
          <div>
            <h4>
              <i className="fas fa-terminal"></i>
              Back-End
            </h4>
            <ul>
              <li>Node.js & Express.js</li>
              <li>RESTful API&apos;s</li>
              <li>SQL & PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <h4>
              <i className="fas fa-code-branch"></i>
              Version-Control
            </h4>
            <ul>
              <li>Git</li>
              <li>Branching, Merging, Pull Requests</li>
            </ul>
          </div>
        </div>
      </section>
      <Timeline />
    </div>
  );
}

export default AboutPage;
