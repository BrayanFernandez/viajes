import React from "react";
import './TodoItem.css';
// ICONS
import { FcOk, FcMinus, FcFullTrash } from "react-icons/fc";

function TodoItem(props) {

    // const onComplete = () => {
    //     alert('se completo tarea ' + props.text);
    // }
    // const onDelete = () => {
    //     alert('se borro tarea ' + props.text);
    // }
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
              {props.completed && <FcOk/> || <FcMinus/>}
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            // onClick={() => alert('le diste clic a la alerta que dice: ' + props.text)}
            >{props.text}.
            <br/> Se planeo en {props.createDate}
            <br/>{props.completedDate && 'Se completo en '+props.completedDate}</p>
            <span
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <FcFullTrash />
            </span>
        </li>
    );
}

export { TodoItem };
