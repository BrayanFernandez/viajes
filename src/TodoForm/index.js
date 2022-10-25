import React from "react";
import { TodoCompletedButton } from "../TodoCompletedButton";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="w-full flex items-center justify-between">
                <div className="flex justify-center items-center w-full">
                    <label>Escribe tu nuevo TODO</label>
                </div>
                <div className="flex">
                    <TodoCompletedButton/>
                </div>

            </div>

            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe el viaje"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };