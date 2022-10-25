import React from "react";
import { FcSearch } from "react-icons/fc";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';


function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        //console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <input
            className="TodoSearch"
            placeholder="buscar viaje..."
            value={searchValue}
            onChange={onSearchValueChange}
        />
        // <p>
        //     {searchValue}
        // </p>
    );
}

export { TodoSearch };
