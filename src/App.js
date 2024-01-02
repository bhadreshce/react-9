import logo from './logo.svg'
import './App.css'
import Head from './Head'
import Footer from './Footer'
import Main from './Main'
import Card from './Card'
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'
import Demo from './Demo'
import ToDo from './ToDo'
import Test from './Test'
import Api from './Api'
import Product from './Product'
import Ref from './Ref'
import Std from './Std'
import TodoApp from './TodoApp'
function App() {
  return (
    <div className="App">
      {/* <Ref /> */}
      {/* <ToDo /> */}
      {/* <Std /> */}
      <TodoApp />
    </div>
  )
}

export default App
