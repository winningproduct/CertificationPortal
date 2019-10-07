import React from 'react';
import Card from './Card';

export default (props) => {
    const { data } = props;
    return (
        <div>
        {
            data.map( data => (
                <Card data={data} />
            ))
        }
        </div>
    )
} 