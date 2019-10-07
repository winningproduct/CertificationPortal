import React from 'react';
import '../style/certification.css'

export default (props) => {
    const { data } = props;
    return (
        <div className="card">
            <h1>{data['name']}</h1>
            <p>{data.age}</p>
        </div>
    )
} 