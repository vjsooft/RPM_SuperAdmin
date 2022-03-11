import React from 'react'
import Sideheader from '../components/Sideheader'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        {/* <div className='col-12'></div> */}
        <div className='sidebar'><Sideheader /></div>
        <div className='home_content p-0'>
          <Header/>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
