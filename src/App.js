import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//components
import Index from './components/Index'
import Jobs from './components/Jobs'


function App() {
  return (
    <div className="general-container">
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/jobs' component={Jobs}/>
        <Route exact path='/' component={Index}/>
      </Switch>
    </Router>
    </div>
  )
}

export default App;
