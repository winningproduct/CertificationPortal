import React from 'react';
import '../style/certification.css';
import Aux from '../Hoc/hocAux'

export default (props) => {
    const { val, certificate } = props;

    const certify = certificate.find(cert =>  cert.name === val.name );

    const complete = (certify || {}).complete || null;

    const noCertificate = () => (
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
    );

    const yesCertificate = () =>  (
        <div className="card">
            <div className="d-flex loneBadge">
                <h1>{val['name']}</h1>
                <img src={require(`../assets/img/${val.img}`)} alt={val.img} />
                <p>Completed</p>
            </div>
        </div>
    );

    return (<Aux>{ complete ? yesCertificate() : noCertificate()}</Aux>)
}
