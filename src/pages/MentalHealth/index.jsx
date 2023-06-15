import { Container, OutNavBar, Title } from '../../styles/FeedLayout'
import NavBar from '../../components/NavBar';
import Humor from '../../components/Humor';
import CreateHumor from '../../components/CreateHumor';

export default function MentalHealth() {
    return (
        <Container>
            <NavBar />
            <OutNavBar>
                <Title>Olá, como você está se sentindo hoje?</Title>
                <CreateHumor />
                <Humor />
            </OutNavBar>
        </Container>
    )
}