import React from "react";
import Todo from "./Todo";

const List = ({list, removeTodoListProp, editTodoListProp}) => {
    const renderedList = list.map(
        (item) => (
            <Todo
                title={item.title}
                completed={item.completed}
                removeTodoItemProp = {(e) => removeTodoListProp(item._id)}
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                key={item.title}
            />
        )
    )
    
    return (
        <div className="ui grid center aligned">
            {/* <Todo title="Test #1"/> */}
            {renderedList}
        </div>
    )
}

export default List

// This component call the component Todo, which has every work to-do
// This component show us the list of all works that exist in the database