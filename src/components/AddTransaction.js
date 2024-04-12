import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction} = useContext(GlobalContext);

    const add_t = e => {
        e.preventDefault();

        const newTran = {
            id: Math.floor(Math.random()*100000),
            text,
            amount: +amount 
        };
        addTransaction(newTran)
    }


  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={add_t}>
        <div className="form-control">
            <label htmlFor = "text">Text</label>
            <input type = "text" value = {text} onChange={(e)=> setText(e.target.value)} placeholder='Enter text...'/>
        </div>
        <div className="form-control">
            <label htmlFor = 'amount'>
                Amount<br/>
                (negative - expense, positive - income)
                </label>
            <input type = 'number' value = {amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Enter amount...' />
        </div>
        <button className = "btn">Add transaction</button>
      </form>
    </>
  )
}
