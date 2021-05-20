import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes/routes';


function App() {
  return (
    <Router>
      <Switch>
        {routes.map((r, i) => (
          <Route
            key={r.path}
            path={r.path}
            exact
            render={(props) => <r.component {...props} />}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
