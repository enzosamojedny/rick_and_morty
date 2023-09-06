import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Box, Button } from "@mui/material";

function Nav({ onSearch, randomize, setAccess }) {
  const navigate = useNavigate()
  const handleLogout = () => {
    setAccess(false)
    navigate('/');//not needed, but try it later
  };
  return (
    <Box>
      <SearchBar onSearch={onSearch} />
      <Button
        size="medium"
        style={{
          color: "white",
          marginRight: 50,
          backgroundColor: "transparent",
          fontWeight: 600
        }}
        onClick={randomize}>ADD RANDOM</Button>
      <NavLink to={'/about'}>
        <Button
          size="medium"
          style={{
            color: "white",
            marginRight: 50,
            backgroundColor: "transparent",
            fontWeight: 600
          }}
        >About</Button>
      </NavLink>
      <NavLink to={'/home'}>
        <Button
          size="medium"
          style={{
            color: "white",
            marginRight: 50,
            backgroundColor: "transparent",
            fontWeight: 600
          }}>Home
        </Button>
      </NavLink>
      <NavLink to={'/favorites'}>
        <Button
          size="medium"
          style={{
            color: "white",
            marginRight: 50,
            backgroundColor: "transparent",
            fontWeight: 600
          }}
        >Favorites</Button>
      </NavLink>
      <Button
        onClick={handleLogout}
        size="medium"
        style={{
          color: "red",
          marginRight: 50,
          backgroundColor: "transparent",
          fontWeight: 600
        }}
      >LOG OUT</Button>
    </Box>

  );
}

export default Nav;
