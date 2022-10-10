import React from 'react';
import './Question.css';
import Options from '../Options/Options';

const Question = ({ allQuestion }) => {
    // console.log(allQuestion);
    const { question, options } = allQuestion;

    return (
        <div className='question-container'>
            <h1>{question}</h1>
            <Options options={options}></Options>
        </div>
    );
};

export default Question;