import { Bar, Options } from './layout';
import { BiUser } from 'react-icons/bi';
import { FaUserFriends, FaGamepad } from 'react-icons/fa';
import { RiMentalHealthFill } from 'react-icons/ri';
import { AiOutlineLogout, AiFillHome, AiFillMessage } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../../contexts/Context";

export default function NavBar() {
    const navigate = useNavigate();
    const { userId, setUserIdPage } = useContext(Context);
    const id = localStorage.getItem('userId') || userId;
    const color = '#fff';
    const size = 30;
    return (
        <Bar>
            <Options onClick={() => {
                navigate(`/feed`);
                }}>
                <AiFillHome color={color} size={size} />
            </Options>
            <Options onClick={() => {
                navigate(`/user/${id}`);
                setUserIdPage(id);
                localStorage.setItem('userIdPage', id)
                }}>
                <BiUser color={color} size={size} />
            </Options>
            <Options onClick={() => {
                navigate('/find');
            }}>
                <FaUserFriends color={color} size={size} />
            </Options>

            <Options onClick={() => {
                navigate('/chat')
            }}>
                <AiFillMessage color={color} size={size} />
            </Options>
            <Options onClick={() => {
                navigate('/health');
            }}>
                <RiMentalHealthFill color={color} size={size} />
            </Options>
            {/* <Options>
                <FaGamepad color={color} size={size} />
            </Options> */}
            <Options onClick={() => {
                navigate('/');
                localStorage.clear();
                }}>
                <AiOutlineLogout color={color} size={size} />
            </Options>
        </Bar>
    )
}