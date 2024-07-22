import { Container } from "@mui/material";
import UserProfile from "../components/UserProfile";
import { User } from "../types/User";

const user: User = {
    id: "1",
    username: "johndoe",
    email: "random@gmail.com",
    role: "admin",
    persona: "Internal",
    features: []
}

export default function HomePage() {
    return (
        <Container>
            <UserProfile user={user}/>
        </Container>
    )
}