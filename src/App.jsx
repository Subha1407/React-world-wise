import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import Login from './pages/Login'
import {AppLayout} from './pages/AppLayout'
import {CityList} from './components/CityList'
import './App.css'
import { useEffect, useState } from 'react'
import { CountryList } from './components/CountryList'

export function App() {
  const BASE_URL = "http://localhost:8000"
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function() {
    async function fetchData() {
      try{
        setIsLoading(true);
        const res = await fetch(BASE_URL + '/cities');
        const data = await res.json();
        setCities(data);
      } catch(e) {
        throw new Error('Failure');
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='app' element={<AppLayout/>}>
        <Route index element={<Navigate to='cities' replace/>}/>
        <Route path='countries' element={<CountryList cities={cities} isLoading={isLoading} />}/>
        <Route path='cities' element={<CityList cities={cities} isLoading={isLoading} />}/>
      </Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

