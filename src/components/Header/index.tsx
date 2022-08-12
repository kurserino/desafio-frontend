import AppBar from "@mui/material/AppBar";
import logo from "./logo.svg";

const Header = () => (
  <AppBar
    position="static"
    elevation={0}
    sx={{
      height: 48,
      bgcolor: "white",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: "1px solid #E5E7EB",
    }}
  >
    <img src={logo} />
  </AppBar>
);

export default Header;
