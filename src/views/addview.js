import React, { useState } from 'react';
import Button from '../components/button';

export default function AddView(props) {
    const [formContents,setFormContents] = useState({
        title: "",
        user: "",
        state: "open"
    })

    function map_users() {
        let userSet = new Set(props.todo.map((elem) => elem.userId));
        let userArray = [...userSet]
        let mapped = userArray.map(elem => {
            return (<option key={elem} value={elem}>User {elem}</option>)
        });
        mapped.unshift(<option key={-1} value={""}>Select a User</option>)
        return mapped
    }

    return (
        <div>
            <div className="slideup-header">
                <div 
                    className="slideup-back"
                    onClick={() => props.closeCallback()}
                    >
                    <i className="fa fa-arrow-left back-arrow" aria-hidden="true"></i>
                </div>
                <div className="slideup-title">
                    <h2>Add Todo</h2>
                </div>
                <div className="slideup-offset"></div>
            </div>
            <div className="add-view-wrapper">
                <div className="add-view-wrapper-element">
                    <input
                        className="search-input"
                        type="text"
                        onChange={(e) => {
                            setFormContents(prev => { return {...prev, title: e.target.value} })
                        }}
                        placeholder={`Title`}
                    />
                    <select
                        className="select-input"
                        value={formContents.user}
                        onChange={(e) => {
                            setFormContents(prev => { return {...prev, user: e.target.value} })
                        }}
                        >
                        {map_users()}
                    </select>

                    <select
                        className="select-input"
                        value={formContents.state}
                        onChange={(e) => {
                            setFormContents(prev => { return {...prev, state: e.target.value} })
                        }}
                        >
                        <option value={'open'}>Open</option>
                        <option value={'closed'}>Closed</option>
                    </select>
                </div>
                <div className="add-view-wrapper-element">
                    <Button 
                        title="finish" 
                        modifier="finish" 
                        clicked={() => props.submitCallback(formContents)} />
                    <Button 
                        title="quit" 
                        modifier="quit" 
                        clicked={() => props.closeCallback()} />
                </div>

            </div>
        </div>
    );
}