import React from 'react';
import './Option.css';
import Swal from 'sweetalert2';

const Option = ({ option, correctAnswer }) => {
    const handleAnswer = (e) => {
        if (correctAnswer === e) {
            Swal.fire({
                icon: 'success',
                title: 'Your answer right',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Worng answer',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    return (
        <div className='option-container'>
            <p onClick={() => handleAnswer(option)}>{option}</p>
        </div>
    );
};

export default Option;