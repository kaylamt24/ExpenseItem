import ExpenseDate from './ExpenseDate'
import React, {useState} from 'react'

import './ExpenseItem.css';

import Card from './Card'

let ExpenseItem = (props) => {

   const [title, setTitle] = useState(props.title)

    // let title = props.title

    const clickHandler = () => {
        setTitle('Updated!')
    }

    return  <Card className="expense-item">
        <ExpenseDate date={props.date}/>

        <div className="expense-item__description">
            <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
}






export default ExpenseItem


//Create a component
//Export the component
//Import into the file where you want to use it(app.js)
//style by importing the css file 