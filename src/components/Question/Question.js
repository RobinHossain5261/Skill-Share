import React, { useState } from 'react';
import './Question.css';
import Options from '../Options/Options';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const Question = ({ allQuestion }) => {
    // console.log(allQuestion);
    const { question, options } = allQuestion;

    const [answer, setAnswer] = useState(false);

    return (
        <div className='question-container'>
            <div className='flex'>
                <h3>{question}</h3>
                <div onClick={() => setAnswer(!answer)}>
                    {
                        answer ? <EyeSlashIcon className="icon" /> : <EyeIcon className="icon" />
                    }
                </div>

            </div>
            <Options
                key={allQuestion.id}
                options={options}>

            </Options>


            <h5 className={`bg-success mt-3 ${answer ? answer : 'd-none'}`}>{allQuestion.correctAnswer}</h5>
        </div >
    );
};

export default Question;