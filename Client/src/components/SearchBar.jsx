import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  function handleChange(event) {
    setId(event.target.value);
  }

  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        value={id}
        placeholder="Enter ID"
      />
      <button onClick={() => props.onSearch(id)}>Agregar</button>
    </div>
  );
}
