import React from 'react'
import './Dashboard.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Dashboard = ({ load, setLoad }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  )
}

export default Dashboard
