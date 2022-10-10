import React from 'react';
import './Quiz.css';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    const questions = quiz.data.questions;
    // console.log(questions)
    return (
        <div className='quiz-container'>
            {
                questions.map(allQuestion => <Question
                    key={allQuestion.id}
                    allQuestion={allQuestion}
                ></Question>)
            }
        </div>
    );
};

export default Quiz;