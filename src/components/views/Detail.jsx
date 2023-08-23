import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'

function Detail() {
  
  const {id} = useParams()
  const [character,setCharacter]= useState({})
  useEffect(() => {
    axios( `http://rym2-production.up.railway.app/api/character/${id}?key=henrym-enzosamojedny`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
  return (
    <div><h1>el id es {id}</h1></div>
  )
}

export default Detail