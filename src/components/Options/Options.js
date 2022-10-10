import React from 'react';
import Option from '../Option/Option';

const Options = ({ options }) => {
    // console.log(options)
    return (
        <div>
            {
                options.map(option => <Option option={option}></Option>)
            }
        </div>
    );
};

export default Options;