let Projects = () => {
  return (
    <div className="project-list-container">
      <h2 className="project-list-title"> Recent Projects</h2>

      <div className="project-list">
        <div className="project-list-item">
          <a href="/projects/project-name">
            <h3 className="project-list-item-title">Project Title</h3>
            <p className="project-list-item-desc">a quick description of the project</p>
          </a>
        </div>
        <div className="project-list-item">
          <a href="/projects/project-name">
            <h3 className="project-list-item-title">Project Title</h3>
            <p className="project-list-item-desc">a quick description of the project</p>
          </a>
        </div>
        <div className="project-list-item">
          <a href="/projects/project-name">
            <h3 className="project-list-item-title">Project Title</h3>
            <p className="project-list-item-desc">a quick description of the project</p>
          </a>
        </div>
        <div className="project-list-item">
          <a href="/projects/project-name">
            <h3 className="project-list-item-title">Project Title</h3>
            <p className="project-list-item-desc">a quick description of the project</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;