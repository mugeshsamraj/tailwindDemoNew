import React from 'react'

function Sidebar() {
  return (
<div className='w-2/12 h-full flex flex-col border-r border-r-gray-400'>
        <div>
          <img src='/assets/dashboardlogo.png' alt='logo' width='100%' height="117px" />
        </div>
        <div></div>
        <div className='px-4 mt-auto border-t border-t-gray-200 p-3'>
          <p className='font-semibold text-sm'>Gopinath S</p>
          <p className='text-sm'>gopinath@gmail.com</p>
        </div>
      </div>
  )
}

export default Sidebar
