import React from 'react';
import Navbar from './Containers/Navbar/Navbar';
import DetailsArea from './Containers/Person Details/DetailsArea';
import SkillsSection from './Containers/Skills Section/SkillsSection';
import ExperienceEducation from './Containers/Education and Experince Section/ExperienceEducation';
import ProjectSection from './Containers/Projects/ProjectSection'
import TestimonialSection from './Containers/Testimonial/TestimonialsSection'
import ContactSession from './Containers/Contacts/ContactSection'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <DetailsArea/>
      <SkillsSection/>
      <ExperienceEducation/>
      <ProjectSection/>
      <TestimonialSection/>
      <ContactSession/>

    </div>
  );
}

export default App;
