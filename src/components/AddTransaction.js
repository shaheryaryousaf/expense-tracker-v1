import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    const context = useContext(GlobalContext);
    const { addTransaction } = context;

    // text is a state
    // setText is a function to manipulate the state
    // default state is an empty string
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setText('');
        setAmount('');
    }

    return (
        <Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </Fragment>
    );
}

export default AddTransaction;
