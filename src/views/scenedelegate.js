import React, { useState, useEffect } from 'react';
import Open from './open';
import Closed from './closed';
import Loading from './loading';
import Nav from './nav';
import Search from '../components/search';
import AddButton from './add';
import SlidingPane from "react-sliding-pane";
import AddView from './addview';
import EditView from './editview';
import "react-sliding-pane/dist/react-sliding-pane.css";


export default function SceneDelegate() {
    const [view, showView] = useState('')
    const [todoList, setTodoList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalView, setModalView] = useState("add")
    const [editId, setEditId] = useState(-1)
    const [query, setQuery] = useState([])
 

    function search_edited_id(){
        for(let i = 0; i < todoList.length; i++){
            if (todoList[i].id == editId){
                return {
                    obj: todoList[i],
                    index: i
                }
            }
        }
    }

    function toggle_completed(id) {
        let filtered = todoList.map((elem, index) => {
            if (elem.id == id) {
                let elem_copy = elem;
                elem_copy.completed = !elem.completed
                console.log('returning', JSON.stringify(elem_copy), ' to use in index', index)
                return elem_copy;
            }
            else {
                return elem
            }
        })

        setTodoList(filtered)

    }


    //load from api
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then(res => res.json())
            .then(res => {
                setTodoList(res)
                showView('open')
            })
    }, [])

    useEffect(() => { }, [todoList])


    return (
        <div>
            <Nav
                openCallback={() => showView('open')}
                closedCallback={() => showView('closed')}
            />

            <div className="main-view-wrapper">
                <Search
                    status={view}
                    queryCallback={(obj) => {
                        setQuery([])
                        let term = obj.term
                        if (term === "") {
                            setQuery([])
                            return
                        }
                        let queryListArr = [...todoList].filter((elem) => {
                            if (elem.title.toLowerCase().includes(term.toLowerCase())){
                                return elem
                            }
                            else {
                                return false
                            }
                        })

                        setQuery(queryListArr)
                    }}
                />
                {(function () {
                    switch (view) {
                        case "open":
                            return (<Open
                                todo={query.length > 0 ? query : todoList}
                                toggleCallback={(id) => toggle_completed(id)}
                                editCallback={(id) => {
                                    setModalView("edit")
                                    setEditId(id)
                                    setShowModal(true)
                                }}
                            />)
                            break
                        case "closed":
                            return (<Closed
                                todo={query.length > 0 ? query : todoList}
                                toggleCallback={(id) => toggle_completed(id)}
                                editCallback={(id) => {
                                    setModalView("edit")
                                    setEditId(id)
                                    setShowModal(true)
                                }}
                            />)
                            break
                        default:
                            return (<Loading />)
                            break
                    }
                })()}
            </div>
            <AddButton openModalCallback={() => {
                setModalView("add")
                setShowModal(true)
            }} />

            {/* start modal */}
            <SlidingPane
                className="modal-parent"
                isOpen={showModal}
                from="bottom"
                width="100%"
                hideHeader={true}
                onRequestClose={() => {
                    setShowModal(false)
                }}
            >
                {(function () {
                    switch (modalView) {
                        case "add":
                            return (<AddView
                                todo={todoList}
                                submitCallback={(contents) => {
                                    setTodoList(prev => {
                                        let current_state_pre = prev
                                        let current_state = current_state_pre.map(elem => {
                                            elem.id++
                                            return elem
                                        });

                                        current_state.unshift({
                                            "userId": (isNaN(parseInt(contents.user)) ? 0 : parseInt(contents.user)),
                                            "id": 1,
                                            "title": contents.title,
                                            "completed": (contents.state == "open" ? false : true)
                                        })

                                        return current_state
                                    })

                                    setShowModal(false)
                                }}
                                closeCallback={() => {
                                    setShowModal(false)
                                }}
                            />)
                            break
                        case "edit":
                            let res = search_edited_id()
                            return (<EditView
                                title={res.obj.title}
                                user={res.obj.userId}
                                state={res.obj.completed}
                                todo={todoList}
                                submitCallback={(contents) => {
                                    console.log(res, " here is res")
                                    setTodoList(prev => {
                                        prev[res.index] = {userId: parseInt(contents.user), id: editId, title: contents.title, completed: (contents.state == "closed" ? true : false)}
                                        return prev
                                    })
                                    setShowModal(false)
                                }}
                                
                                closeCallback={() => {
                                    setShowModal(false)
                                }}
                            />)
                            break
                        default:
                            return (<div></div>)
                            break
                    }
                })()}
            </SlidingPane>

            {/* end modal */}
        </div>
    );

}