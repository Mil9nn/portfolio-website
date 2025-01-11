/* eslint-disable react/jsx-key */
const projects = [
  { title: "Project 1", description: "Description of Project 1", img: "/images/project1.jpg" },
  { title: "Project 2", description: "Description of Project 2", img: "/images/project2.jpg" }
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project) => (
         <div>
          <img src={project.img} />
          <h4>{project.title}</h4>
          <p>{project.description}</p>
         </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;