import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMePage';
import Contact from './ContactPage';
import Projects from './Projects';
import Resume from './Resume';


const MainPage = () => (
  <Switch>
    <Route exact path="/luis-delgado-portfolio" component={LandingPage} />
    <Route path="/luis-delgado-portfolio/aboutme" component={AboutMe} />
    <Route path="/luis-delgado-portfolio/contact" component={Contact} />
    <Route path="/luis-delgado-portfolio/projects" component={Projects} />
    <Route path="/luis-delgado-portfolio/resume" component={Resume} />
  </Switch>
)

export default MainPage;