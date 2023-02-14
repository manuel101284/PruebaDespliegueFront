import React, { useState } from "react";

const Todo = ({title, completed, removeTodoItemProp, editTodoItemProp}) => {

    const [Value, setValue] = useState(title)
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompletedState] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    }

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
    
        if(key === 13){
            editTodoItemProp({ title: tempValue });
            setValue(tempValue);
            setIsEditing(false);
        }
        else if(key === 27){
            setTempValue(Value);
            setIsEditing(false);
        }
    }

    const handleInputOnChange = (e) => {
        setTempValue(e.target.Value);
    }

    const handelButtonClick = () => {
        setCompletedState((oldCompleted) => {
            const newState = !oldCompleted;
            editTodoItemProp({completed: newState});
            return newState;
        })
    }

    return (
        <div className="row" onDoubleClick={handleDivDoubleClick}>
            {
                isEditing ?
                    <div className="column seven wide">
                        <div className="ui input fluid">
                            <input
                                onChange={handleInputOnChange}
                                onKeyDown={handleInputKeyDown}
                                autoFocus={true}
                                value={tempValue}    
                            />
                        </div>
                    </div>:
                    <>
                        <div className="column five wide" onDoubleClick={handleDivDoubleClick}>
                            <h2 className={"ui header" + (completedState ? "green" : "")}>{Value}</h2>
                        </div>
                    
                        <div className="column one wide">
                            <button className={"ui button circular icon" + (completedState ? "blue" : "green")} onClick={handelButtonClick}>
                                <i className="white check icon"></i>
                            </button>
                        </div>
                    
                        <div className="column one wide">
                            <button className="ui button circular icon red" onClick={removeTodoItemProp}>
                                <i className="white remove icon"></i>
                            </button>
                        </div>
                    </>
            }
        </div>
    );
}

export default Todo

// At begin, the component List contains this section.
// Now, this component has the work to-do and two buttons: red and green