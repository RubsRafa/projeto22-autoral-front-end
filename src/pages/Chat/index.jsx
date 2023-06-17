import ChatComponent from "../../components/ChatComponent";
import NavBar from "../../components/NavBar";
import UsersChat from "../../components/UsersChat";
import { Container, OutNavBar } from "./layout";

export default function Chat() {
    return (
        <Container>
            <NavBar />
            <OutNavBar>
                <UsersChat />
                <ChatComponent />
            </OutNavBar>
        </Container>
    )
}