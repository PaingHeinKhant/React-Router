import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

const Products = () => {
  return (
    <>
   <div className="">
   <input type="text" placeholder='search your products' />
   </div>
   <nav>
    <Link to='featured' >Featured Products</Link>
    <Link to='new' >New Products</Link>
   </nav>
   <Outlet/>
    </>
  )
}

export default Products