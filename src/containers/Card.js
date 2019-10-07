import React from 'react';

export default (props) => {
    const { data } = props;
    return (
        <div>
            <h1>{data['name']}</h1>
            <p>{data.age}</p>
        </div>
    )
} 