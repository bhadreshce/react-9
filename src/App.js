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
import Child from './Child'
import Memo from './Memo'
import Props from './Props'
const webSItename = 'My app'
function App() {
  return (
    <div className="App">
      {/* <Ref /> */}
      <ToDo />
      {/* <Std /> */}
      {/* <TodoApp name={webSItename} /> */}
      {/* <Child name={webSItename} /> */}
      {/* <Memo /> */}
      {/* <Props name={true} /> */}
    </div>
  )
}

export default App
