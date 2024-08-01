import React from 'react'
import './expense.css'

function Expense({ income, expense }) {
  return (
    <div>
        <div className='balance'>
        <h2><b>My Balance</b></h2>
        <h3><b>₹{income - expense}</b> </h3>
      </div>

      <div className='exp1'>
        <h2 className='h2'>My Income</h2>
        <h3 className='h3'>₹{income}</h3>
      </div>
      <div className='exp1 '>
        <h2 className='h2'>My Expence</h2>
        <h3  className='h3'>₹{expense}</h3>
      </div>
      
    </div>
  )
}

export default Expense
