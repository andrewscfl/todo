import React from 'react';
import Card from './card';

export default function CardList(props){
    let render = props.todo.filter(elem => {
        if (elem.completed == props.completed){
            return elem
        }
        else{
            return false;
        }
    }).map(openElem => {
        return (<Card 
                completed={openElem.completed} 
                title={openElem.title} 
                userId={openElem.userId} 
                id={openElem.id}
                key={openElem.id}
                toggle={(id) => props.toggleCallback(id)}
                editCallback={(id) => props.editCallback(id)}
                />)
    })

    return(<div className="cardlist-scrollable">{render}</div>);
}