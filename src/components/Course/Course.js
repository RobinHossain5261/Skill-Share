import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({ course, quizHandaler }) => {
    const { logo, name, id } = course;
    return (
        <div className='course-container'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <Link to={`/quiz/${id}`}>
                <button >Start Partice</button>
            </Link>
        </div>
    );
};

export default Course;