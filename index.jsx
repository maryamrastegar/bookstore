import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Basket from './Basket'
import History from './History'
import Book from './Book'
import Shop from './Shop'
import LoginManager from './Login'
import Register from './Register'
import MyBooks from './MyBooks'
import SingleBook from './SingleBook'
import Footer from '../components/Footer'

function Router() {
  return (
    <div className='container' id={"main-container"}>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/basket' element={<Basket />}/>
          <Route path='/history' element={<History />}/>
          <Route path='/add-book' element={<Book />}/>
          <Route path='/edit-book' element={<Book />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/login' element={<LoginManager />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/my-books' element={<MyBooks />}/>
          <Route path='/single-book' element={<SingleBook />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default Router