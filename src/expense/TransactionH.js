import React from 'react'
import './expense.css'

function TransactionH({transactions,ondeletetransaction}) {
  return (
    <div>
         <h2>Transaction History</h2>
        
        <ul>
            {
               transactions.map((data)=>
                <li className='list' key={data.id}><b>{data.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`₹{data.amount}
                </b> &nbsp;&nbsp;<button className='listbutton btn btn-danger btn-sm' onClick={()=>ondeletetransaction(data.id)}>Delete</button></li>)
            }       
        </ul>
    </div>
  )
}

export default TransactionH
