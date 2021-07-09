import React from 'react';

export default function Button(props){
    
    return(
    <div 
        className={`button-wrapper ${props.modifier != null ? props.modifier : ""}`}
        onClick={() => props.clicked()}
        >
            {props.title}
        </div>
    );
}