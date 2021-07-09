import React from 'react';

export default function AddButton(props){
    return(
    <div className="floating-add-button"
    onClick={() => props.openModalCallback()}
    >
       <p> +</p>
    </div>
    );
}