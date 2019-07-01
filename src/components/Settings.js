/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
const GRADIENT_TYPE = [
    'linear-gradient',
    'radial-gradient',
    'repeating-linear-gradient',
    'repeating-radial-gradient',
    'conic-gradient'
];
function Settings(props) {
    return (
        <section>
            <div className="container">
                <h1 className="title">
                    Settings
                </h1>
                <p className="subtitle">
                    {props.colors.map((value, index, array) => <span key={`${value}`}><span style={{ background: value }}>{value}</span>{(array.length === index + 1) ? "." : ","}</span>)}
                </p>
                <label htmlFor="noc">Number Of Colors</label>
                <div className="level-item">
                    <div className="field has-addons">
                        <p className="control">
                            <input id="noc" name="count" className="input" type="number" placeholder="Number of colors" value={props.count} onChange={props.handleChange} />
                        </p>
                        <p className="control">
                            <button className="button" onClick={props.submitCount}>
                                Save
          </button>
                        </p>
                    </div>
                </div>
                <label htmlFor="tog">Gradient Type</label>
                <div className="select">
                    <select name="type" id="tog">
                        <option value={props.currentType} onChange={props.handleSelect}>{props.currentType}</option>
                        {(GRADIENT_TYPE.filter((value1)=>value1!==props.currentType)).map((value)=><option key={value} value={value}>{value}</option>)}
                    </select>
                </div>
            </div>
        </section>
    );
}

export default Settings;
