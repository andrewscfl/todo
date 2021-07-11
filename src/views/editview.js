import React, { useState } from 'react';
import Button from '../components/button';

export default function EditView(props) {
    const [formContents, setFormContents] = useState({
        title: props.title,
        user: props.user,
        state: props.state
    })

    function map_users() {
        let userSet = new Set(props.todo.map((elem) => elem.userId));
        let userArray = [...userSet]
        let mapped = userArray.map(elem => {
            return (<option key={elem} value={elem}>User {elem}</option>)
        });
        return mapped
    }

    return (
        <div>
            <div className="slideup-header">
                <div
                    className="slideup-back"
                    onClick={() => props.closeCallback()}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4375 18.75L4.6875 12L11.4375 5.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.625 12L19.3125 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="slideup-title">
                    <h2>Edit Todo</h2>
                </div>
                <div className="slideup-offset"></div>
            </div>
            <div className="add-view-wrapper">
                <div className="add-view-wrapper-element">

                    <input
                        className="search-input"
                        type="text"
                        value={formContents.title}
                        onChange={(e) => {
                            setFormContents(prev => { return { ...prev, title: e.target.value } })
                        }}
                        placeholder={`Title`}
                    />

                    <div className="select-input-wrapper">
                        <select
                            className="select-input"
                            value={formContents.user}
                            onChange={(e) => {
                                setFormContents(prev => { return { ...prev, user: (isNaN(parseInt(e.target.value)) ? 0 : e.target.value) } })
                            }}
                        >
                            {map_users()}
                            

                        </select>
                        <div className="down-chevron-icon">
                            <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 1L7.75 7.75L1 0.999999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="select-input-wrapper">
                        <select
                            className="select-input"
                            value={formContents.state == true ? 'closed' : 'open'}
                            onChange={(e) => {
                                setFormContents(prev => { return { ...prev, state: e.target.value } })
                            }}
                        >
                            <option value={'open'}>Open</option>
                            <option value={'closed'}>Closed</option>
                        </select>
                        <div className="down-chevron-icon">
                            <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 1L7.75 7.75L1 0.999999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="add-view-wrapper-element buttons">
                    <Button
                        title="Finish"
                        modifier="finish"
                        clicked={() => props.submitCallback(formContents)} />
                    <Button
                        title="Quit"
                        modifier="quit"
                        clicked={() => props.closeCallback()} />
                </div>

            </div>
        </div>
    );
}