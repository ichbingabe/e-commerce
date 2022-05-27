import React from 'react'
import {  BrowserRouter as Router, Route  } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="index.html">DuckIT</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <main>
            
        </main>
        <footer className="row center">
            something
        </footer>
    </div>
    </Router>
  );
}

export default App;
