
import './Quiz.css';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';


const Quiz = () => {

    const quiz = useLoaderData();
    const questions = quiz.data.questions;
    return (

        <div className='quiz-container'>
            <h1>Quiz of {quiz.data.name}</h1>
            <h4>Total: {questions.length}</h4>
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