import React, { useState, useEffect, useRef } from 'react'
import uniqueid from './uniqueid';
import './expense.css'

function TransactionForm({ onNewtransaction }) {
    const inputReference = useRef(null);
    const [nameValue, setNamevalue] = useState("");
    const [amountValue, setAmountvalue] = useState("")

    const addTransaction = (type, e) => {
        e.preventDefault();
        const data = {
            id: uniqueid(), name: nameValue, amount: parseInt(amountValue), type: type
        }
        onNewtransaction(data);
        setNamevalue("");
        setAmountvalue("");

    }

    let onchangeHandler1 = (e) => {
        e.preventDefault()
        setNamevalue(e.target.value)

    }
    let onchangeHandler2 = (e) => {
        e.preventDefault()
        setAmountvalue(e.target.value)

    }
    useEffect(() => {
        inputReference.current.focus();
    }, []);
    return (
        <div>
            <h1>Add New Transactions</h1>
            <form action="">
                <div>

                    <b style={{color: "white"}}>Name:</b> <input type="text" name="" ref={inputReference} id="" value={nameValue} placeholder='Enter Name' onChange={onchangeHandler1} />

                </div>
                <div className='input2'>
                    <b style={{color: "white"}}>Amount:</b> <input type="number" name="" id="" value={amountValue} placeholder="Enter Amount" onChange={onchangeHandler2} /></div>
                <div className='mybutton'>
                    <button className='btn btn-primary btn-sm mx-2' onClick={(e) => addTransaction('income', e)}>Add Income</button>
                    <button className='btn btn-danger btn-sm mx-2' onClick={(e) => addTransaction('expence', e)}>Add Expense</button>
                </div>
            </form>

        </div>
    )
}

export default TransactionForm
