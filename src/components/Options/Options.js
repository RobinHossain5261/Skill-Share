import React from 'react';
import Option from '../Option/Option';

const Options = ({ options, correctAnswer }) => {
    // console.log(correctAnswer)
    // console.log(options)
    return (
        <div>
            {
                options.map(option => <Option
                    correctAnswer={correctAnswer}
                    option={option}
                ></Option>)
            }
        </div>
    );
};

export default Options;