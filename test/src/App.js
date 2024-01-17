import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Product from './Product'

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
    </div>
  )
}

export default App
