import React from 'react'

function Dashboard() {
  return (
    <div className='flex flex-col gap-8 lg:flex-row justify-between'>
      <div className="flex flex-col gap-16 lg:flex-3">
        <span className='font-bold lg:text-2xl'>Dashboard</span>
        <div className="flex justify-between items-center gap-2">
          <div className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg h-28">
            fffff
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg h-28">
            fffffff
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="p-4 w-full">
            <span>Chart</span>
          </div>
          <div className="p-4 w-full">
            <span>Chat</span>
          </div>
        </div>
      </div>
      <div className="lg:flex-2 bg-gray-200 dark:bg-gray-800 rounded-lg p-4">
        <span>Recent Expenses</span>
      </div>
    </div>
  )
}

export default Dashboard