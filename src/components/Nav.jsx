import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Box, Button } from "@mui/material";

function Nav({ onSearch, randomize }) {
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
    </Box>

  );
}

export default Nav;
