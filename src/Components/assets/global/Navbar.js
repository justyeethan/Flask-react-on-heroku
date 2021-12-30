import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const navigate = useNavigate();
  const HomeNavigate = () => {
    navigate("./", { replace: true });
  };
  const AboutNavigate = () => {
    navigate("./About", { replace: true });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Flask Template
          </Typography>
          <Button onClick={HomeNavigate} color="inherit">
            Home
          </Button>
          <Button onClick={AboutNavigate} color="inherit">
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
