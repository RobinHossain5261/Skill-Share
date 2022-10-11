import React from 'react';
import './Ststistics.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Ststistics = () => {
    const data = [
        {
            name: "React",
            logo: "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
            tota: 8,
        },
        {

            name: "JavaScript",
            logo: "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
            total: 9,
        },
        {
            logo: "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
            name: "CSS",
            total: 8,
        },
        {
            logo: "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
            name: "Git",
            total: 11,
        },

    ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <div className='ststistics-container'>
                <LineChart width={500} height={400} data={data} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>
        </ResponsiveContainer>
    );
};

export default Ststistics;