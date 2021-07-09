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
                    user id: {props.userId}
                </div>
            </div>
            <div className="card-edit" onClick={() => props.editCallback(props.id)}>
                <i className="fa fa-ellipsis-h iconToggle" aria-hidden="true"></i>
            </div>
        </div>
    );
}