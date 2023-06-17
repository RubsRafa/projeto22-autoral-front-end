import { useContext, useEffect, useState } from "react";
import { getChatMessagesApi, getChatUsersApi } from "../../services/chatApi";
import { ChatComponentBox, Me, Messages, OtherUser, UserBar, H1, H2, TypeMessage } from "./layout";
import { RiSendPlaneFill } from 'react-icons/ri';
import Context from "../../contexts/Context";

export default function ChatComponent({ chatId}) {
    const [messages, setMessages] = useState([]);
    const { userToken, userId } = useContext(Context);
    const token = userToken || localStorage.getItem('token');
    const userLogged = userId || localStorage.getItem('userId');
    const userChat = chatId || localStorage.getItem('chatUserId');
    const [userInfo, setUserInfo] = useState();

    async function getMessages() {
        try {
            const texts = await getChatMessagesApi(token, userChat);
            setMessages(texts);
            const user = await getChatUsersApi(token);
            setUserInfo(user.find((u) => u.user.id === userChat))
        } catch (e) {
            console.log;
        }
    }

    useEffect(() => {
        getMessages();
    }, [userChat])
    return (
        <ChatComponentBox>
            <UserBar>
                <img src={userInfo.user.image} alt="user_image" />
                <h1>{userInfo.user.name}</h1>
            </UserBar>
            <Messages>
                {messages.map((m) => (
                    <>
                        {m.fromId === userLogged &&
                            <Me>
                                <H1>{m.message}</H1>
                                <H2>{m.time.slice(11,13)}:{m.time.slice(14,16)}</H2>
                            </Me>
                        }
                        {m.toId === userLogged &&
                            <OtherUser>
                                <h1>{m.message}</h1>
                                <h2>{m.time.slice(11,13)}</h2>
                            </OtherUser>
                        }
                    </>
                ))}
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