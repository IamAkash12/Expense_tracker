import React, { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle, SetEnteredTitle] = useState('');
    const [enteredAmount, SetEnteredAmount] = useState('');
    const [enteredDate, SetEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        SetEnteredTitle(event.target.value);
        // console.log(event.target.value);
    }

    const amountChangeHandler = (event) => {
        SetEnteredAmount(event.target.value);
        //console.log(event.target.value);
    }

    const dateChangeHandler = (event) => {
        SetEnteredDate(event.target.value);
        //console.log(event.target.value);
    };

    // Another Method

    //  const[userInput,setUserInput]=useState({
    //     enteredTitle:' ',
    //     enteredAmount:' ',
    //     enteredDate:' ',
    //  });

    // const amountChangeHandler = (event) =>{
    //         // setUserInput({

    //         //     ...userInput,
    //         //     enteredTitle:event.target.value,

    //         // });
    //         // console.log(event.target.value);
    //         setUserInput((prevState)=>{
    //             return{...prevState,enteredTitle:event.target.value}
    //         });
    //     }
    //     const dateChangeHandler = (event) =>{
    //         setUserInput({

    //             ...userInput,
    //             enteredDate:event.target.value,
    //         });
    //     }
    //     const titleChangeHandler = (event) =>{
    //         setUserInput({

    //             ...userInput,
    //             enteredAmount:event.target.value,
    //         });
    //     }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);

        SetEnteredTitle(" ");
        SetEnteredAmount(" ");
        SetEnteredDate(" ");
    };

    return (

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="numbers" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;