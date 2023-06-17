import { ChatComponentBox, Me, Messages, OtherUser, UserBar, H1, H2, TypeMessage } from "./layout";
import { RiSendPlaneFill } from 'react-icons/ri';

export default function ChatComponent() {
    return (
        <ChatComponentBox>
            <UserBar>
                <img src="https://coleandmarmalade.com/wp-content/uploads/2021/10/Manny-and-Dogs.jpg" alt="user_image" />
                <h1>NOME USUÁRIO </h1>
            </UserBar>
            <Messages>
                <OtherUser>
                    <h1>Outro usuário mandou mensagem</h1>
                    <h2>horário</h2>
                </OtherUser>
                <Me>
                    <H1>Eu mandei mensagem mas nãi importa aod ifa oisd fnoa isdnf oian do mas e se eu e se voce e se nos e se pu de sse mos</H1>
                    <H2>Horario</H2>
                </Me>
            </Messages>
            <TypeMessage>
                <textarea placeholder="Mensagem..."></textarea>
                <button>
                    <RiSendPlaneFill color="#fff" size={30} />
                </button>
            </TypeMessage>
        </ChatComponentBox>
    )
}