import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToggleThemeProvider } from './contexts/themeToggleContext'
import { HOME } from './router/paths'
import { Home } from './screens/Home'

function App() {
  return (
    <ToggleThemeProvider>
      <Router>
        <Switch>
          <Route path={HOME} component={Home} exact />
        </Switch>
      </Router>
    </ToggleThemeProvider>
  );
}

export default App;
