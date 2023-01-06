import React from "react";

function ProjectItem({ name, about, technologies }) {

  const techArray = technologies.map(element=>{
    return <span key={element}>{element}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techArray}
      </div>
    </div>
  );
}

export default ProjectItem;
