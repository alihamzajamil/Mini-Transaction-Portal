import React, {useState } from "react";
import './acc.css'

// context api
import { useAccountContext } from "../../context/accountContext";

// components
import Balance from "../../components/Balance/Balance"
import Income from "../../components/Income/Income"
import Expense from "../../components/Expense/Expense"
import History from "../../components/History/History"

//css
import '../../App.css'


const AccountManager = () => {
    const AccountData = useAccountContext();

    const {addTransaction} = AccountData;

    //getting form data (state for transaction title and amount)
    const [transaction_title, setTransactionTitle] = useState("");
    const [transaction_amount, setTransactionAmount] = useState(0);

    //submit form data
    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({ id: Date.now(), transaction_title, transaction_amount });        
    };

    
    return ( //--------------------------------------------------------------
    <>
        <h4 className="headname">Ali Hamza</h4>
        <h4 className="headname">F2020266496</h4>
        <h2 className="headname">Personal Account Manager</h2>

        <div className="container">
            <Balance></Balance>
            <div className="inc-exp-container">
                <Income></Income>
                <Expense></Expense>
            </div>
            <History></History>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        id="text" 
                        placeholder="Enter text..."
                        onChange={(e) => setTransactionTitle(e.target.value)}
                        // value={title}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount 
                        <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        id="amount"
                        placeholder="Enter amount..." 
                        onChange={(e) => setTransactionAmount(Number(e.target.value))}
                        // value={title}
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    </>  
    ); //--------------------------------------------------------------
};

export default AccountManager;