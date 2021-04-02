import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToggleThemeProvider } from './contexts/themeToggleContext'
import { ViewportProvider } from './contexts/viewportContext'
import { HOME } from './router/paths'
import { Home } from './screens/Home'

function App() {
  return (
    <ViewportProvider>
      <ToggleThemeProvider>
        <Router>
          <Switch>
            <Route path={HOME} component={Home} exact />
          </Switch>
        </Router>
      </ToggleThemeProvider>
    </ViewportProvider>
  );
}

export default App;
