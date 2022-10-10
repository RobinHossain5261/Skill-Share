import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({ course, quizHandaler }) => {
    const { logo, name, id } = course;
    return (
        <div className='course-container'>
            <img src={logo} alt="" />
            <h1>{name}</h1>
            <Link to={`/quiz/${id}`}>
                <button onClick={() => quizHandaler(id)}>Click Me</button>
            </Link>
        </div>
    );
};

export default Course;