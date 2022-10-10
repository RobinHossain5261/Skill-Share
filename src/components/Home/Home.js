import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useLoaderData } from 'react-router-dom';
import CarouselOne from '../../images/cursole-1.jpg';
import CarouselTwo from '../../images/pic-2.jpg';
import CarouselThree from '../../images/pic-3.jpg';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {
    const data = useLoaderData();
    const courses = data.data;

    const quizHandaler = id => {
        console.log(id)
    }



    return (
        <div className='home'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-pic"
                        src={CarouselOne}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-pic"
                        src={CarouselTwo}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-pic"
                        src={CarouselThree}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

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
