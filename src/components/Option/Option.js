import React from 'react';
import './Option.css';

const Option = ({ option, correctAnswer }) => {
    // console.log(correctAnswer);
    const handleAnswer = (e) => {
        if (correctAnswer === e) {
            alert('Congratulation, Right answer');
        }
        else {
            alert('Worng Answer');
        }
    }
    return (
        <div className='option-container'>
            <p onClick={() => handleAnswer(option)}>{option}</p>
        </div>
    );
};

export default Option;