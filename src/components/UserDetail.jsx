import React from 'react'
import { useParams } from 'react-router-dom'


const UserDetail = () => {
    const params = useParams();
    const userId = params.userId;

  return (
    <div>UserDetail {userId}</div>
  )
}

export default UserDetail
