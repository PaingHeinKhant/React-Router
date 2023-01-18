import React from 'react'
import { Routes,Route } from 'react-router-dom'
// import { About } from './components/About'
import { Admin } from './components/Admin'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Home } from './components/Home'
import Navbar from './components/Navbar'
import { NewProduct } from './components/NewProduct'
import NotFound from './components/NotFound'
import OrderSummary from './components/OrderSummary'
import Products from './components/Products'
import { User } from './components/User'
import UserDetail from './components/UserDetail'

const LazyAbout = React.lazy(()=> import('./components/About'))

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={
        <React.Suspense fallback='Loading...'>
          <LazyAbout/>
        </React.Suspense>
        }
        />
      <Route path='order-summary' element={<OrderSummary/>}/>
      <Route path='products' element={<Products/>}>
        <Route index element={<FeaturedProducts/>}/>
        <Route path='featured' element={<FeaturedProducts/>}/>
        <Route path='new' element={<NewProduct/>}/>
      </Route>
      <Route path='user' element={<User/>}>
        <Route path=':userId' element={<UserDetail/>}/>
        <Route path='admin' element={<Admin/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App