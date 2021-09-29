import {useState, useEffect} from 'react';
import { collection, getDocs } from "firebase/firestore";

const useProjects = (API) =>{
    const [projects, setProjects] = useState({
        projects: [
             {
                 name: String,
                 tags: Array,
                 url: String,
                 img: String
             }
         ]
     });

    useEffect(() => {
        const getData = async() => {
            const data = await getDocs(collection(API, 'proyectos'));
            data.forEach((projects) => {
                setProjects(projects.data().projects)
            })
      
          }
        getData();
    }, []);
    
    return projects;
};

export default useProjects;