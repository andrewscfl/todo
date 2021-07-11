import React, { useState } from 'react';

export default function Nav(props) {
    const [isOpen, setOpen] = useState(true);
    return (
        <div className="nav">
            <div className="top-bar-wrapper">
                <div className="top-bar-title">
                    <h2>ToDo's</h2>
                </div>
                <div className="top-bar-toggle">
                    <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 5.5C1.11929 5.5 0 4.38071 0 3C0 1.61929 1.11929 0.5 2.5 0.5C3.88071 0.5 5 1.61929 5 3C5 4.38071 3.88071 5.5 2.5 5.5Z" fill="white" />
                        <path d="M10.5 5.5C9.11929 5.5 8 4.38071 8 3C8 1.61929 9.11929 0.5 10.5 0.5C11.8807 0.5 13 1.61929 13 3C13 4.38071 11.8807 5.5 10.5 5.5Z" fill="white" />
                        <path d="M18 5.5C16.6193 5.5 15.5 4.38071 15.5 3C15.5 1.61929 16.6193 0.5 18 0.5C19.3807 0.5 20.5 1.61929 20.5 3C20.5 4.38071 19.3807 5.5 18 5.5Z" fill="white" />
                    </svg>

                </div>
            </div>
            <div className="selector-bar">
                <div
                    className={`selector-option-open selector-option ${isOpen ? "underline" : ""}`}
                    onClick={() => {
                        setOpen(true)
                        props.openCallback()
                    }}
                >Open</div>
                <div
                    className={`selector-option-closed selector-option ${isOpen ? "" : "underline"}`}
                    onClick={() => {
                        setOpen(false)
                        props.closedCallback()
                    }}
                >Closed</div>
            </div>
        </div>
    );
}