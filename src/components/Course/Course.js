import React from 'react';
import './Course.css';

const Course = ({ course }) => {
    const { logo, name } = course;
    console.log(course)
    return (
        <div className='course-container'>
            <img src={logo} alt="" />
            <h1>{name}</h1>
            <button>Click Me</button>
        </div>
    );
};

export default Course;