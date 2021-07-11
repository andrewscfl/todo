import React, { useState } from 'react';

export default function Card(props) {
    const [checked, setChecked] = useState(props.completed)
    const [exiting, setExiting] = useState(false)

    return (
        <div className={`card ${exiting ? "fadeNow" : ""}`}>
            <div className={`card-completed `}
                onClick={() => {
                    setChecked(prev => !prev)
                    setExiting(true)
                    setTimeout(() => {
                        props.toggle(props.id)
                    }, 800)


                }}
            >
                <div className={`${checked ? "closed" : "open"}`}>
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
                <div className="card-user">
                    User: {props.userId}
                </div>
            </div>
            <div className="card-edit" onClick={() => props.editCallback(props.id)}>
                <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 5.5C1.11929 5.5 0 4.38071 0 3C0 1.61929 1.11929 0.5 2.5 0.5C3.88071 0.5 5 1.61929 5 3C5 4.38071 3.88071 5.5 2.5 5.5Z" fill="white" />
                    <path d="M10.5 5.5C9.11929 5.5 8 4.38071 8 3C8 1.61929 9.11929 0.5 10.5 0.5C11.8807 0.5 13 1.61929 13 3C13 4.38071 11.8807 5.5 10.5 5.5Z" fill="white" />
                    <path d="M18 5.5C16.6193 5.5 15.5 4.38071 15.5 3C15.5 1.61929 16.6193 0.5 18 0.5C19.3807 0.5 20.5 1.61929 20.5 3C20.5 4.38071 19.3807 5.5 18 5.5Z" fill="white" />
                </svg>
            </div>
        </div>
    );
}