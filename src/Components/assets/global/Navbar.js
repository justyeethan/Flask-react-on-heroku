import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Flask Template
          </Typography>
          <Button onClick={() => {navigate('./')}} color="inherit">
            Home
          </Button>
          <Button onClick={() => {navigate("./About")}} color="inherit">
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
