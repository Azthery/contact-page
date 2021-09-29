import React from "react";
import '../assets/styles/components/ProjectItem.scss'

const ProjectItem = ( {data} ) => (
    <li className="project" style={{ backgroundImage: `url(${data.img})`}}>
        <div className="project--tag">
            {
                data.tags.length > 0 &&
                data.tags.map((tag) => <p>{tag}</p>)
            }
        </div>
        <a href={data.url} className="project--name">
            <h1>{data.name}</h1>
        </a>
    </li>
);

export default ProjectItem;