import React, { useState } from 'react';

export default function Card(props) {
    const [checked, setChecked] = useState(props.completed)
    const [exiting, setExiting] = useState(false)
    const [isHovering, setHovering] = useState(false)
    const [optionsMenu, setOptionsModal] = useState(false)

    return (
        <div
            className={`card ${exiting ? "fadeNow" : ""} ${isHovering ? 'hover-card' : ''}`}
            onMouseOver={() => setHovering(true)}
            onMouseOut={() => setHovering(false)}
        >
            <div className={`card-completed `}
                onClick={() => {
                    setChecked(prev => !prev)
                    setExiting(true)
                    setTimeout(() => {
                        props.toggle(props.id)
                    }, 800)
                }}
            >
                <div className={`${checked ? "closed" : "open"} ${isHovering ? 'hover-card-completed' : ''}`}>
                    {(function () {
                        if (checked) {
                            return (<i className="fa fa-check complete-icon" aria-hidden="true"></i>)
                        }
                        else {
                            return <div></div>
                        }
                    })()}
                </div>
            </div>
            <div className="card-info">
                <div className="card-title"><strong>{props.title}</strong></div>
                <div className={`card-user ${isHovering ? 'hover-card-user' : ''}`}>
                    User: <span>{props.userId}</span>
                </div>
            </div>
            <div
                className="card-edit"
                onClick={
                    () => {
                        setOptionsModal(prev => !prev)
                    }
                }
            >
                <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 5.5C1.11929 5.5 0 4.38071 0 3C0 1.61929 1.11929 0.5 2.5 0.5C3.88071 0.5 5 1.61929 5 3C5 4.38071 3.88071 5.5 2.5 5.5Z" fill="white" />
                    <path d="M10.5 5.5C9.11929 5.5 8 4.38071 8 3C8 1.61929 9.11929 0.5 10.5 0.5C11.8807 0.5 13 1.61929 13 3C13 4.38071 11.8807 5.5 10.5 5.5Z" fill="white" />
                    <path d="M18 5.5C16.6193 5.5 15.5 4.38071 15.5 3C15.5 1.61929 16.6193 0.5 18 0.5C19.3807 0.5 20.5 1.61929 20.5 3C20.5 4.38071 19.3807 5.5 18 5.5Z" fill="white" />
                </svg>
                <div className={`${optionsMenu ? 'show-options-menu' : 'hide-options-menu'}`}>
                    <div className="show-options-menu-triangle"></div>
                    <div className={`options-menu-items`}>
                        <div
                            className=""
                            onClick={() => {
                                setOptionsModal(prev => !prev)
                                props.editCallback(props.id)
                            }}
                        >
                            <p>Edit ToDo</p>
                        </div>
                        <div className="divider"></div>
                        <div
                            className=""
                            onClick={() => {
                                setOptionsModal(prev => !prev)
                                setChecked(prev => !prev)
                                setExiting(true)
                                setTimeout(() => {
                                    props.toggle(props.id)
                                }, 800)
                            }}
                        >
                            <p>Mark Completed</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}