import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';
// ICONS
import { FcLike } from "react-icons/fc";

function TodoCounter() {

    const { totalTodos, completedTodos } = React.useContext(TodoContext)
    return (
        <h2 className="TodoCounter bg-fondo">Hemos completado {completedTodos} de {totalTodos} viajes <FcLike/></h2>
    );
}

export { TodoCounter };
