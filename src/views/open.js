import React from 'react';
import CardList from '../components/cardlist';

export default function Open(props){
    
    return(
    <div>
        <CardList todo={props.todo} completed={false} toggleCallback={(id) => props.toggleCallback(id)} editCallback={(id) => props.editCallback(id)} />
    </div>
    );
}