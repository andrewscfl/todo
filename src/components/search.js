import React, {useState, useEffect} from 'react';

export default function Search(props){
   
    return(
    <div>
        <input
        className="search-input"
        type="text" 
        onChange={(e) => {
            //callback sends back object with current value of input and status (open or close)
            props.queryCallback({term : e.target.value, status: props.status})
        }} 
        placeholder={`Search`}
         />
    </div>
    );
}