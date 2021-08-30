import logo from './logo.svg';
import Counter from "../src/react/pages/counter"
import GETAPI from './react/components/GETAPI';
import POSTAPI from './react/components/POSTAPI';
import {BrowserRouter as Router,
        Switch,
        Route,} from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css'

function App() {
  return (
      <div className="App">
          <Router>
            <div>
              <Switch>
                <Route path="/" component={Counter} exact>
                </Route>
                <Route path="/get" component={GETAPI} exact>
                </Route>
                <Route path="/post">
                  <POSTAPI />
                </Route>
              </Switch>
            </div>
          </Router>
      </div>
  );
}

export default App;
