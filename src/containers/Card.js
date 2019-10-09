import React from 'react';
import '../style/certification.css';

export default (props) => {
    const { val } = props;
    return (
        <div className="card">
            <div className="w-20 d-flex">
                <img src={require(`../assets/img/${val.img}`)} alt={val.img} />
            </div>
            <div className="w-80">
                <h1>{val['name']}</h1>
                <p className="description">{val.description}</p>
                <button>Follow Course</button>
                <form>
                    <div id='inputForm'>
                    <label className="inp">
                        <input type="text" name={val['name']} value={props[val['name']]} onChange={props.handleChange} id="inp" placeholder="&nbsp;" />
                        <span className="label">Certify Url</span>
                        <span className="border"></span>
                        </label>
                    </div>
                        <button className="submitButton" type="submit" name={val['name']} onClick={props.handleSubmit}>Claim My Badge</button>
                </form>
            </div>
            </div>
            )
        }
        
