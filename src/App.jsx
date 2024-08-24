import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import Login from './pages/Login'
import {AppLayout} from './pages/AppLayout'
import {CityList} from './components/CityList'
import './App.css'
import { CountryList } from './components/CountryList'
import { CitiesProvider } from './context/CitiesContext'
import { City } from './components/City'

export function App() {

  return (
    <CitiesProvider>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='app' element={<AppLayout/>}>
        <Route index element={<Navigate to='cities' replace/>}/>
        <Route path='countries' element={<CountryList/>}/>
        <Route path='cities' element={<CityList/>}/>
        <Route path='cities/:id' element={<City/>}></Route>
      </Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </CitiesProvider>
  )
}

