import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";

export default function NavBar() {

    console.log("dfs")
    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#FFD700" }}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column"
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="h6" sx={{
                        fontFamily: '"Oswald", "Druk Wide", "Arial Black", sans-serif',
                        fontSize: "2rem",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "transparent",
                        WebkitTextStroke: "1.5px black", 
                    }}>
                        HETES
                    </Typography>
                    <Box component="img" src={logo} alt="Logo" sx={{ height: 40 }} />
                    <Typography variant="h6" sx={{
                        fontFamily: '"Oswald", "Druk Wide", "Arial Black", sans-serif',
                        fontSize: "2rem",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "black",
                    }}>
                        BISTRO
                    </Typography>
                </Box>

                <Box sx={{
                    fontFamily: '"Oswald", "Arial Black", sans-serif',
                    fontSize: "2rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    WebkitTextStroke: "1.5px white",  
                }}>
                    <Button color="inherit" component={Link} to="/about" sx={{ color: "black" }}>About</Button>
                    <Button color="inherit" component={Link} to="/services" sx={{ color: "black" }}>Services</Button>
                    <Button color="inherit" component={Link} to="/order" sx={{ color: "black" }}>Order now!</Button>
                    <Button color="inherit" component={Link} to="/events" sx={{ color: "black" }}>Events</Button>
                    <Button color="inherit" component={Link} to="/events" sx={{ color: "black" }}>Reservations</Button>
                    <Button color="inherit" component={Link} to="/events" sx={{ color: "black" }}>Contact</Button>

                </Box>



            </Toolbar>
        </AppBar>
    )
}