
import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './componantes/NavBar/NavBar'
import Home from './Pages/Home/Home'
import Properties from './Pages/Properties/Properties'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'
import ContactUs from './Pages/ContactUs/ContactUs'
import Header from './componantes/Header/Header'

function App() {
 
  return (
    <>
        <Header/>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/properties' element={<Properties/>}/>
        <Route path='/propertyDetails' element={<PropertyDetails/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        </Routes>
    </>
  )
}

export default App
