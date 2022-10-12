import React, { useState } from 'react';
import './Question.css';
import Options from '../Options/Options';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const Question = ({ allQuestion }) => {
    const { question, options, correctAnswer } = allQuestion;
    const [answer, setAnswer] = useState(false);
    const replace = question.replace("<p>", " ");
    const replaceQuestion = replace.replace("</p>", " ");

    return (
        <div className='question-container'>
            <div className='flex'>

                <h3>Quiz :{replaceQuestion}</h3>
                <div onClick={() => setAnswer(!answer)}>
                    {
                        answer ? <EyeSlashIcon className="icon" /> : <EyeIcon className="icon" />
                    }
                </div>

            </div>
            <Options
                key={allQuestion.id}
                correctAnswer={correctAnswer}
                options={options}>
            </Options>
            <h5 className={`bg-success mt-3 ${answer ? answer : 'd-none'}`}>{allQuestion.correctAnswer}</h5>
        </div >
    );
};

export default Question;