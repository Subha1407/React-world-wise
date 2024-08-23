import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
    </Routes>
  )
}

export default App
