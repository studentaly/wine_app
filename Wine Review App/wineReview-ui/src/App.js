import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateWinePage from './pages/CreateWinePage';
import EditWinePage from './pages/EditWinePage';
import Navigation from './components/Nav'
import { useState } from 'react';
import {GiWineBottle} from 'react-icons/gi';

function App() {
  const [wineToEdit, setWineToEdit] = useState();


  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <span className="icon"><GiWineBottle/></span>
          <h1>Wine Reviews</h1>
          <p className="slogan">
            Become your own Robert Parker!
          </p>
        </header>
        <div className = "Nav"><Navigation/></div>
        <main>
          <div className="App-main">
            <Route path="/" exact>
              <HomePage setWineToEdit={setWineToEdit} />
            </Route>
            <Route path="/add-wine">
              <CreateWinePage />
            </Route>
            <Route path="/edit-wine">
              <EditWinePage wineToEdit={wineToEdit} />
            </Route>
          </div>
        </main>
        <footer>
          <p> &copy; Alyssa Feutz 2022</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;