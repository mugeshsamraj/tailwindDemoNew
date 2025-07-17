import Header from '@/component/header'
import Sidebar from '@/component/sidebar'
import TableData from '@/component/tabledata'

import React from 'react'

function Dashboard() {
  return (
    <div className='w-full flex h-screen'>
      <Sidebar />
      <div className='w-10/12 h-auto'>
      <Header />
      <div className='w-full p-6 bg-gray-100 h-auto'>
        <div className='w-98% h-auto shadow-md z-50 bg-white'>
          <div className='flex justify-between p-6'>
            <button className='px-4 py-2 bg-black text-white rounded-lg'>+ Add User</button>
            <input type='text' placeholder='search' className='p-2 rounded-lg border-2 bg-blue' />
          </div>
          <TableData />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
