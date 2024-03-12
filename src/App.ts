import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './pages/Principal'; 

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <Router>
      <>
        <div>
          <Link to="/">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </Link>
          <Link to="/react">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </Link>
        </div>

        <Switch>
          <Route path="/react">
            {/* Página personalizada */}
            <HomePage />
          </Route>

          <Route path="/">
            {/* Componente principal */}
            <>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
