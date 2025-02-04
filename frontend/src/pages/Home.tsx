import { Container, Typography } from "@mui/material";
import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <Container>
            <Typography variant="h3" mt={4}>Hetes Étterem</Typography>
            <Typography variant="body1" mt={2}>Ételek, italok, szolgáltatások</Typography>
        </Container>
    )
}