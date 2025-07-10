import React from 'react'

function RecentExpenses() {
  return (
    <div className='flex flex-col gap-6'>
        <span className='text-lg font-bold'>Recent Expenses</span>
        <div className=" flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex flex-col gap-2">
                <span>Food</span>
                <span className='text-xs'>15th May</span>
            </div>
            <span>#3000,00k</span>
        </div>
        <div className=" flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex flex-col gap-2">
                <span>Food</span>
                <span className='text-xs'>15th May</span>
            </div>
            <span>#3000,00k</span>
        </div>
        <div className=" flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex flex-col gap-2">
                <span>Food</span>
                <span className='text-xs'>15th May</span>
            </div>
            <span>#3000,00k</span>
        </div>
    </div>
  )
}

export default RecentExpenses