import React from 'react';
import '../assets/styles/App.scss';

import dataBase from '../firebase/firebaseConfig';

import HeaderNav from '../components/HeaderNav';
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
          projectsItems.length &&
          projectsItems.map(el => (
              <ProjectItem item={el}/>
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
