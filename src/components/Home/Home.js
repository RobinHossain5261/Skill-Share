import React from 'react';

import { useLoaderData } from 'react-router-dom';

import Course from '../Course/Course';
import './Home.css';

const Home = () => {
    const data = useLoaderData();
    const courses = data.data;

    console.log(courses)
    const quizHandaler = id => {
        console.log(id)
    }



    return (
        <div className='home'>
            <div className='bg-image'>
                <div className='image-text'>
                    <h4>LIFEBUILDING EDUCATION</h4>
                    <h2>More Than 25K+ <br />
                        Edu Courses Online</h2>
                    <p>Choose from over 250,000 online video courses with new additions published every month, high quality courses.

                        Get Started Now  </p>
                    <button>Get Started</button>
                </div>
            </div>
            <h1>Our Course</h1>
            <div className='all-course'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                        quizHandaler={quizHandaler}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Home;
