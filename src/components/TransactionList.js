import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

export default function TransactionList() {
    const { transactions, updateTransaction } = useContext(GlobalContext);
    const [isOpen, setOpen] = useState(false);
    const [inst, setInst] = useState({
        id: 0,
        text: "",
        amount: ""
    });

    const handleClose = () => {
        setOpen(false);
    };

    const updating = e =>{
        e.preventDefault();
        updateTransaction(inst.id,inst.text, +inst.amount);
        setOpen(false);
    }


    return (
        <>
            <h3>History</h3>
            {isOpen && (
                <div className='popup'>
                    <div className='header'>
                        <p>Updating Transaction</p>
                        <button onClick={handleClose}>x</button>
                    </div>
                    <form onSubmit={updating}>
                        <div className='form-control'>
                            <label htmlFor='text'>Text</label>
                            <input type='text' value={inst.text} onChange={(e) => setInst({ ...inst, text: e.target.value })} />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='number'>Amount</label>
                            <input type='number' value={inst.amount} onChange={(e) => setInst({ ...inst, amount: e.target.value })} />
                        </div>
                        <button className = "btn">update</button>
                    </form>
                </div>
            )}
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} setOpen={setOpen} setInst={setInst} />
                ))}
            </ul>
        </>
    );
}
