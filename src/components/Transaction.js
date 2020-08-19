import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
    const context = useContext(GlobalContext);
    const { deleteTransaction } = context;

    const { amount, text } = transaction;
    const sign = amount < 0 ? '-' : '+';
    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span>{sign}${Math.abs(amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    );
}

export default Transaction;
