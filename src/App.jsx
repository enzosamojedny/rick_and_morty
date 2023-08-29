import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Detail from "./components/views/Detail.jsx";
import About from "./components/views/About.jsx";
import Login from "./components/Login.jsx";
import ErrorPage from "./components/views/ErrorPage.jsx";
import Favorites from "./components/views/Favorites.jsx";
import "./App.css";

function App() {
  let location = useLocation()
  const [characters, setCharacters] = useState([]);
  const isHomePage = location.pathname === '/'
  function onClose(id) {
    setCharacters(
      characters.filter((character) => {
        return character.id !== Number(id);
      })
    );
  }
  //*! LOGIN ACCORDING TO SPECIFIC USER/PASSWORD
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
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
  //*!ONSEARCH
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
  //*!RANDOMIZER
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
