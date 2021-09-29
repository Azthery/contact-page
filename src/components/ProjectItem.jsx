import React from "react";
import '../assets/styles/components/ProjectItem.scss'

const ProjectItem = ({item}) => {
return(
    <li className="project" style={{ backgroundImage: `url(${item.img})`}}>
        <div className="project--tag">
            {
                item.tags.length > 0 &&
                item.tags.map(tag => <p>{tag}</p>)
            }
        </div>
        <a href="/" className="project--name">
            <h1>{item.name}</h1>
        </a>
    </li>
)};

export default ProjectItem;