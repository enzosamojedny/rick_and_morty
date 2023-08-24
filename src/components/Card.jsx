import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";


export default function Card(props) {
  const { id } = props;
  return (
    <div>
      <Button
      size="medium"
      style={{
      color: "white",
      marginRight: 50,
      backgroundColor: "transparent",
      fontWeight: 600,
       }}
        onClick={() => {
          props.onClose(id);
        }}>X</Button>
        
        <Link to={ `/detail/${id} `}><h2 className="card-name">{props.name}</h2></Link>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin}</h2>
      <img src={props.image} alt="" />
    </div>
  );
}
