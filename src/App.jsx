import { useState } from "react";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/views/Detail.jsx";
import About from "./components/views/About.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  function onClose(id) {
    setCharacters(
      characters.filter((character) => {
        return character.id !== Number(id);
      })
    );
  }
  function onSearch(id) {
    axios(
      `http://rym2-production.up.railway.app/api/character/${id}?key=henrym-enzosamojedny`
    ).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }
  function randomHandler() {
    let cache = [];

    let randomId = (Math.random() * 826).toFixed();
    randomId = Number(randomId);

    if (!cache.includes(randomId)) {
      cache.push(randomId);
      axios(
        `http://rym2-production.up.railway.app/api/character/${randomId}?key=henrym-enzosamojedny`
      ).then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
    } else {
      alert("Ese personaje ya fue agregado, coleguilla");
      return;
    }
  }

  return (

    <div className="App">
      <Nav onSearch={onSearch} randomize={randomHandler} />
      <Routes>
        <Route path="/home" index element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
