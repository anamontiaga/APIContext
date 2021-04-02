import './App.css';
import { ToggleThemeProvider } from './contexts/themeToggleContext'

function App() {
  return (
    <ToggleThemeProvider>
      <div className="App">
        Hola API Context

    </div>
    </ToggleThemeProvider>
  );
}

export default App;
