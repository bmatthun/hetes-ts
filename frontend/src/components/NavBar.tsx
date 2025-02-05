import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

export default function NavBar() {

    const shine = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

    const arrowAnimation = keyframes`
  0% {
    transform: translateY(-30px) rotate(0deg);  // Kezdeti helyzet
  }
  50% {
    transform: translateY(0) rotate(45deg);  // Nyíl a gomb irányába
  }
  100% {
    transform: translateY(-30px) rotate(90deg);  // Nyíl visszatér a kiinduló pontra
  }
`;

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

                    <Button
                        color="inherit"
                        component={Link}
                        to="/order"
                        sx={{
                            color: "black",
                            "&:hover": {
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                letterSpacing: "0.1em",
                                animation: `${shine} 0.5s ease-out`
                            }
                        }}
                    >
                        Order now!
                    </Button>

                    <Button color="inherit" component={Link} to="/events" sx={{ color: "black" }}>Events</Button>
                    <Button color="inherit" component={Link} to="/events" sx={{ color: "black" }}>Reservations</Button>
                    <Button color="inherit" component={Link} to="/events" sx={{ color: "black" }}>Contact</Button>

                </Box>



            </Toolbar>
        </AppBar>
    )
}