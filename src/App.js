import './App.css';
import Main from './Page/Main';
import AboutMe from './Page/AboutMe';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/portfolio" component={Main} />
          <Route exact path="/portfolio/about-me" component={AboutMe} />
        </Switch>
      </Router>
  );
}

export default App;
