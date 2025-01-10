import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePages from './pages/HomePages'
import CartPage from './pages/CartPage'
import FavoritePage from './pages/FavoritePage'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePages/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='/favorite' element={<FavoritePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
    </>
  )
}

export default App
