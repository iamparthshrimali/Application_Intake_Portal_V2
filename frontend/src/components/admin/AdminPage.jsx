import React from 'react'
import Navbar from "../navbar/Navbar"
import { Outlet } from 'react-router-dom'



const AdminPage = () => {
  const navigation = [
    { name: 'Show List', href: 'list', current: true },
    { name: 'Add', href: 'add', current: false },
  ]
  return (
    <>
    
   <Navbar navigation={navigation} />
   
     <Outlet/>
    </>
  )
}

export default AdminPage