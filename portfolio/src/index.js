import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AboutMe from './Pages/AboutMePage';
import Contact from './Pages/ContactPage';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
        </Switch>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
