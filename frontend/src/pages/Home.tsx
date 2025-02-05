import { Box, Typography } from "@mui/material";
import backgroundImage from "../assets/Home.jpg";

export default function Home() {
    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover', // A háttérkép kitölti a teljes szülő elemet
            backgroundPosition: 'center', // A háttérkép középre van igazítva
            height: '100vh', // A teljes magasságot lefedi
            display: 'flex', // Flexboxot használunk a belső elemek középre igazításához
            justifyContent: 'center', // A gyermek elemeket vízszintesen középre igazítjuk
            alignItems: 'center', // A gyermek elemeket függőlegesen középre igazítjuk
            color: 'white', // A szöveg színét fehérre állítjuk a háttérképhez
        }}
        >
            {/* <Typography variant="h3" mt={4}>Hetes Étterem</Typography>
            <Typography variant="body1" mt={2}>Ételek, italok, szolgáltatások</Typography> */}
        </Box>
    )
}