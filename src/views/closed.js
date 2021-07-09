import React from 'react';
import CardList from '../components/cardlist';

export default function Closed(props){
    return(
        <div>
        <CardList todo={props.todo} completed={true} toggleCallback={(id) => props.toggleCallback(id)} editCallback={(id) => props.editCallback(id)} />
        </div>
    );
}