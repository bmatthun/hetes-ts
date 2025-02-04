import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

export default function NavBar() {

    console.log("dfs")
    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#433" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }} >
                <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }} >
                    <Box component="img" src={logo} alt="Logo" sx={{ height: 40, mr: 2 }} />
                </Link>
                HetesBar

                <Box>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/services">Services</Button>
                    <Button color="inherit" component={Link} to="/reservations">Reservations</Button>
                    <Button color="inherit" component={Link} to="/order">Order now!</Button>
                    <Button color="inherit" component={Link} to="/events">Events</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}