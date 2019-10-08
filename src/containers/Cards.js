import React from 'react';
import Card from './Card';
import '../style/certification.css'
export default (props) => {
    const { data } = props;
    return (
        <div className="cards">
        {
            data.map( data => (
                <Card key={data.id} val={data} {...props} />
            ))
        }
        </div>
    )
} 