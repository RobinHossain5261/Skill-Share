import React from 'react';
import './Option.css';

const Option = ({ option }) => {
    // console.log(option)
    return (
        <div className='option-container'>
            {/* <p>{option}</p> */}
            <label htmlFor="">
                <input type="radio" name="select" id="" />{option}
            </label>
        </div>
    );
};

export default Option;