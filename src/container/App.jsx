import React from 'react';
import '../assets/styles/App.scss';

import dataBase from '../firebase/firebaseConfig';

import Presentation from '../components/Presentation';
import Projects from '../components/Projects';
import ProjectItem from '../components/ProjectItem';
import Contact from '../components/Contact';
import ContactLinks from '../components/ContactLinks';
import FormContact from '../components/FormContact';

import useProjects from '../hooks/useProjects';

const App = () => {
  let projectsItems = useProjects(dataBase);

  return (
    <div className="App">
      <Presentation></Presentation>
      <Projects>
        {
          projectsItems.length > 0 &&
          projectsItems.map(data => (
              <ProjectItem data={data}/>
            ))
        }
      </Projects>
      <Contact>
        <FormContact/>
        <ContactLinks/>
      </Contact>
    </div>
  );
}

export default App;
