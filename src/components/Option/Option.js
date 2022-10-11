import React from 'react';
import './Option.css';

const Option = ({ option }) => {
    return (
        <div className='option-container'>
            <p>{option}</p>
        </div>
    );
};

export default Option;