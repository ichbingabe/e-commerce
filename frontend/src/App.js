import React from 'react'
import {  BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

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
            <Routes>
                <Route path='/' exact element={<HomePage />}/>
                <Route path='/product/:id' element={<ProductPage />} />
            </Routes>
        </main>
        <footer className="row center">
            something
        </footer>
    </div>
    </Router>
  );
}

export default App;
