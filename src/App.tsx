import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import Login from './pages/Login'
import {AppLayout} from './pages/AppLayout'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/app' element={<AppLayout/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default App
