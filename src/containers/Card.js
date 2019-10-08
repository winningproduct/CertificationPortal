import React from 'react';
import '../style/certification.css';

export default (props) => {
    const { data } = props;
    return (
        <div className="card">
            <div className="w-20 d-flex">
                    <img src={require(`../assets/img/${data.img}`)} alt={data.img} />
            </div>
            <div className="w-80">
                <h1>{data['name']}</h1>
                <p className="description">{data.description}</p>
                <button>Enrol !</button>
            </div>
        </div>
    )
} 