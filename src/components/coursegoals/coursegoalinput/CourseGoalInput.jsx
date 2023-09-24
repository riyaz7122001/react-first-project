import React, { useState } from 'react';
import styles from './CourseGoalInput.module.css';
import Button from '../../ui/button/Button';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);


    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }

        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            return;
        }
        props.onAddGoal(enteredValue);
        setEnteredValue('')
    };

    const keyPressHandler = event => {
        if (event.key === 'Enter') return formSubmitHandler(event);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
                <label>Course Goal</label>
                <input type="text" onKeyPress={keyPressHandler} onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
