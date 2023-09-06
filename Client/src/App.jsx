import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Detail from "./components/views/Detail.jsx";
import About from "./components/views/About.jsx";
import Login from "./components/Login.jsx";
import ErrorPage from "./components/views/ErrorPage.jsx";
import Favorites from "./components/views/Favorites.jsx";
import "./App.css";

function App() {
  let location = useLocation()
  const isHomePage = location.pathname === '/'
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  //*! ONCLOSE FUNCTION

  function onClose(id) {
    setCharacters(
      characters.filter((character) => {
        return character.id !== Number(id);
      })
    );
  }

  //*! LOGIN ACCORDING TO SPECIFIC USER/PASSWORD (--not used--)

  const EMAIL = 'rick@gmail.com';
  const PASSWORD = 'rickpassword';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  }
  useEffect(() => {
    !access && navigate('/');
    //eslint-disable-next-line
  }, [access]);

  //*! ONSEARCH
  function onSearch(id) {
    axios(
      `http://localhost:3001/rickandmorty/character/${id}`
    ).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  //*! RANDOMIZER

  function randomHandler() {
    let memoria = [];

    let randomId = (Math.random() * 826).toFixed();

    randomId = Number(randomId);

    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      onSearch(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  return (
    <div className="App">
      {!isHomePage && <Nav onSearch={onSearch} randomize={randomHandler} access={access} setAccess={setAccess} />}
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
