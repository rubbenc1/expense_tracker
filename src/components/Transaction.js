import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export default function Transaction({ transaction, setOpen, setInst }) {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            <button className="pen-btn" onClick={() => {
                setOpen(true);
                setInst({id: transaction.id, text: transaction.text, amount: transaction.amount});
            }}>
                <FontAwesomeIcon icon={faPen} />
            </button>
        </li>
    );
}
