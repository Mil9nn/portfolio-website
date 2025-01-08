
// src/pages/FrontEnd.jsx
function FrontEnd() {
  return (
    <div>
    <h3>FrontEnd Projects</h3>
    <div className="portfolio-section">
      {/* Ist Project */}
      <div className="project-card">
        <img src="src\assets\keeper.png" alt="Project 1" />
        <div className="project-info">
          <h4>Keeper App</h4>
          <p>A simple notes-taking application built with React.The project highlights my skills in component-based architecture and state management.</p>
          <div className="project-links">
            <a href="https://keeper786.netlify.app/" target="_blank" rel="noopener noreferrer">View Live</a>
            <a href="https://github.com/Mil9nn/The-Keeper-App" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        </div>
      </div>
      {/* 2nd project */}
      <div className="project-card">
        <img src="src\assets\omnifood.png" alt="Project 1" />
        <div className="project-info">
          <h4>Omnifood Website</h4>
          <p>A responsive food delivery website. 
          This project highlights my skills in layout design, 
          CSS styles, and responsiveness.</p>
          <div className="project-links">
            <a href="https://mil9nn.github.io/omnifood-project/omnifood/index.html" target="_blank" rel="noopener noreferrer">View Live</a>
            <a href="https://github.com/Mil9nn/omnifood-project" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        </div>
      </div>
      {/* Add more projects here */}
    </div>
    </div>
  );
}

export default FrontEnd;

