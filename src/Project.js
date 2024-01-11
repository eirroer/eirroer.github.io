
import React from "react";
import "./Project.css";

function Project({ title = "Title", description = "Description"}) {
  return (
    <div className="project">
      <h4 className="project__title">{title}</h4>
      <p className="project__description">{description}</p>
    </div>
  );
}

export default Project;