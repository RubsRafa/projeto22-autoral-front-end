import { Container, Logo, OutNavBar, MainContainer } from '../../styles/FeedLayout';
import NavBar from '../../components/NavBar';
import Timeline from '../../components/Timeline';

export default function Feed() {
    return (
        <Container>
            <NavBar />
            <OutNavBar>
                <Logo><h1>Friendly</h1></Logo>
                <MainContainer>
                    <Timeline />
                    {/* <MainInfo>
                        <Info>INFO</Info>
                        <Chat>CHAT</Chat>
                    </MainInfo> */}
                </MainContainer>
            </OutNavBar>
        </Container>
    )
}