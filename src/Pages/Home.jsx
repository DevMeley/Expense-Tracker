import React from 'react'

function Home() {
  return (
    <div>
        <div className="flex flex-col justify-center items-center min-h-120 gap-8 text-center">
          <span className='text-blue-500 text-3xl'>Budgeting made simple.</span>
          <span>Set limits, track expenses, get insights. Stay in control without the clutter.</span>
          <button className='px-6 py-2 bg-blue-800 text-white text-lg rounded-lg'>Get Started</button>
        </div>
    </div>
  )
}

export default Home