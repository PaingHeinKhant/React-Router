import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'


export const User = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <>
     <div>User</div>
     <button onClick={()=>setSearchParams({filter : 'active'})}>Active Users</button>
     <button onClick={()=>setSearchParams({})}>Restart Users</button>
     <Outlet/>
     {
        showActiveUsers ? <h2>Showing Active User</h2> :  <h2>Showing All User</h2>
     }  
     </>
  )
}
