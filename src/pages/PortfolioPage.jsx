import ImgMediaCard from "../components/ImgMediaCard";
import projects from "../components/projects";

function PortfolioPage() {

    return (
        <section className="portfolio">
          <h2>Portfolio</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ImgMediaCard 
                key={index} 
                img={project.img} 
                title={project.title} 
                description={project.description}
                alt={project.alt}
                gitRepoLink={project.gitRepoLink}
                liveDemoLink={project.liveDemoLink}
              />
            ))}
          </div>
       </section>
    );
  }
  
  export default PortfolioPage;
  