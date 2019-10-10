import React from 'react';
import Card from './Card';
import '../style/certification.css'
export default (props) => {
    const { data , certificate } = props;

    const completedCertificates = certificate.filter( data => data.complete );

    return (
        <div className="cards">
        {
            data.map( data => (
                <Card key={data.id} val={data} {...props} completeCount={completedCertificates.length} />
            ))
        }
        </div>
    )
} 