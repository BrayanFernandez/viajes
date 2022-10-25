import React from "react";
import './TodoCompletedButton.css';
import { HiClipboardCheck } from "react-icons/hi";
import { TodoContext } from "../TodoContext";

function TodoCompletedButton() {


    const todosCompletedSearch = () => {
        console.log('test');
        // todosCompleted(prevState => !prevState);
        //setSearchCompletedTodos(event.target.value);
    }
    return (
        <button type="button" className="verCompletedTodos"
            data-bs-toggle="tooltip" data-bs-placement="right" title="Ver viajes completados"
            onClick={todosCompletedSearch}>
            <HiClipboardCheck className="iconCompletedTodos" />
        </button>
    );
}

export { TodoCompletedButton };