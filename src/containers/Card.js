import React from 'react';
import '../style/certification.css';
import Aux from '../Hoc/hocAux'

export default (props) => {
    const { val, certificate, completeCount } = props;

    const certify = certificate.find(cert => cert.name === val.name);

    const complete = (certify || {}).complete || null;

    let shouldDisable = 'dont';
    let disableButton = false;
    let disableQuote = '';
    let divDisplay = '';
    let buttonDisplay = '';

    if (completeCount + 2 <= val.id) {
        shouldDisable = 'disable';
        disableButton = true;
        disableQuote = props.data[val.id - 2].name;
        divDisplay = 'divDisplay';
        buttonDisplay= 'buttonDisplay'
    }

    const style = {
        disable: {
            pointerEvents: 'none',
            background: 'rgba(239, 239, 239, 0.73)'
        },
        dont: {

        },
        divDisplay : {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'spaceAround',
            alignItems: 'center',
        },
        buttonDisplay: {
            backgroundColor: '#737f8cd6',
            boxShadow: 'none',
            marginTop: '8%'
        }
    }

    const noCertificate = () => (
        <div className="card" style={style[shouldDisable]}>
            <div className="w-20 d-flex">
                <img src={require(`../assets/img/${val.img}`)} alt={val.img} />
            </div>
            <div className="w-80">
                <h1>{val['name']}</h1>
                <div style = {style[divDisplay]}>
                    <p className="description">{val.description}</p>
                    {disableButton ? null : <button>Follow Course</button>}
                    {disableButton ? <button style={style[buttonDisplay]}>Be {disableQuote} :)</button> : <form>
                        <div id='inputForm'>
                            <label className="inp">
                                <input type="text" name={val['name']} value={props[val['name']]} onChange={props.handleChange} id="inp" placeholder="&nbsp;" />
                                <span className="label">Certify Url</span>
                                <span className="border"></span>
                            </label>
                        </div>
                        <button className="submitButton" type="submit" name={val['name']} onClick={props.handleSubmit}>Claim My Badge</button>
                    </form>}
                </div>
            </div>
        </div>
    );

    const yesCertificate = () => (
        <div className="card">
            <div className="d-flex loneBadge">
                <h1>{val['name']}</h1>
                <img src={require(`../assets/img/${val.img}`)} alt={val.img} />
                <p>Completed</p>
            </div>
        </div>
    );

    return (<Aux>{complete ? yesCertificate() : noCertificate()}</Aux>)
}
