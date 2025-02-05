import { Box, Typography } from "@mui/material";
import backgroundImage from "../assets/HetesBackground.jpg";

export default function About() {
    return (
        <Box
            sx={{
                position: "relative", // A pozíció beállítása a belső rétegek kezeléséhez
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
            }}
        >
            {/* Háttérkép réteg homályosítással */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(4px)", // Homályosítás
                    opacity: 0.5, // Halványítás
                }}
            />

            {/* Sötét overlay réteg (opcionális) */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Sötétebbé teszi a képet
                }}
            />

            {/* Előtér tartalom */}
            <Box sx={{ position: "relative", textAlign: "center", zIndex: 1 }}>
                <Typography variant="h3">Bemutatkozás</Typography>
                <Typography variant="h6">Ez az oldal az About szekció.</Typography>
            </Box>
        </Box>
    );
}
