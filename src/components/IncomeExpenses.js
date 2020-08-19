import React, { Fragment, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
    const context = useContext(GlobalContext);
    const { transactions } = context;

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return (
        <Fragment>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" className="money plus">+${income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className="money minus">-${expense}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default IncomeExpenses;
