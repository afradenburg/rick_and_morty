import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchBar({ onSearch, isActiveButtons }) {
  const [id, setId] = useState("");
  const location = useLocation();

  function changeHandler(event) {
    setId(event.target.value);
  }

  return (
    <div>
      {isActiveButtons && location.pathname === "/home" ? (
        <input
          type="search"
          onChange={changeHandler}
          value={id}
          placeholder="Search Character"
        />
      ) : (
        ""
      )}

      {isActiveButtons && location.pathname === "/home" ? (
        <button
          onClick={() => {
            onSearch(id);
          }}
        >
          Agregar
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
