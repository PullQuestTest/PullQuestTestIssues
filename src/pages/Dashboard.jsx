import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'

const Dashboard = () => {
  return (
    <div className='w-full'>
      <Appbar />
      <div className='mt-8 px-8 md:px-24'>
        <Balance balance={1000}/>
        <Users />
      </div>
    </div>
  )
}

export default Dashboard
