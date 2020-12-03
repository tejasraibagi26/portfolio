import './App.css';
import Main from './Page/Main';
import AboutMe from './Page/AboutMe';
import Project from './Page/Projects';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Contact from './Page/Contact';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/portfolio" component={Main} />
          <Route exact path="/portfolio/about-me" component={AboutMe} />
          <Route exact path="/portfolio/projects" component={Project} />
          <Route exact path="/portfolio/contact-me" component={Contact} />
        </Switch>
      </Router>
  );
}

export default App;
