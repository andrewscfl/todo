import React, {useState} from 'react';

export default function Nav(props){
    const [isOpen, setOpen] = useState(true);
    return(
    <div className="nav">
        <div className="top-bar-wrapper">
            <div className="top-bar-title">
                <h2>ToDo's</h2>
            </div>
            <div className="top-bar-toggle">
            <i className="fa fa-ellipsis-h iconToggle" aria-hidden="true"></i>
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