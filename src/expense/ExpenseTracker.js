import React from 'react'
import Expense from './Expense';
import TransactionForm from './TransactionForm';
import TransactionH from './TransactionH';
import { useState,useEffect } from 'react'
import './expense.css'
import uniqueid from './uniqueid';




//mock data
const transactiondata=[
    {
        id:uniqueid(), name:"Salery",amount:1000,type:'income'
    },
    { id:uniqueid(), name:"Grocery",amount:100,type:'expense'},
  
];

function ExpenseTracker() {
    const [income,setIncome]=useState(0);
    const [expense, setExpense]=useState(0)
    const [transactions,setTransaction]=useState(transactiondata);

    const calculateExpense=()=>{
        let income=0,expense = 0;

        transactions.forEach((data)=>{
            if (data.type === 'income'){
                income += data.amount
            }else if (data.type === 'expense'){
                expense += data.amount
            }
        });

        setIncome(income)
        setExpense(expense)
    }

    const handleTransaction= data =>{
        let cloneTransaction =[...transactions,data]
        setTransaction(cloneTransaction)  
    }

    const handleDelete = id =>{
        console.log(id)
         //those who have the id will be shown and rest will be not
        const newTransaction  = transactions.filter((item)=>
        item.id!==id)
        setTransaction(newTransaction)

    }
    useEffect(()=>{
        calculateExpense();
 
     },[transactions]);

  return (
    <div className='expense'>
         <h1 className='heading'>Expence Tracker</h1>
         <Expense  income={income} expense={expense}></Expense>
         <TransactionH transactions={transactions} ondeletetransaction={handleDelete}></TransactionH>
         <TransactionForm onNewtransaction={handleTransaction}></TransactionForm>
      
    </div>
  )
}

export default ExpenseTracker
