import './App.css';
import Body from './Component/Body/Body';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
export const AnsContext = createContext();

function App() {
  const [userAnswer, setUserAnswer] = useState([]);
  return (
    <AnsContext.Provider value={[userAnswer, setUserAnswer]}>
    <Router>
          <Switch>
            <Route path="/quiz">
              <Body></Body>
            </Route>
            <Route exact path="/">
            <Body></Body>
            </Route>
            <Route path="*">
            <Body></Body>
            </Route>
          </Switch>
        </Router>
        </AnsContext.Provider>
  );
}

export default App;
