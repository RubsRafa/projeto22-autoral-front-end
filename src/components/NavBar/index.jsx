import { Bar, Options } from './layout';
import { BiUser } from 'react-icons/bi';
import { FaUserFriends, FaGamepad } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../../contexts/Context";

export default function NavBar() {
    const navigate = useNavigate();
    const { userId, setUserIdPage } = useContext(Context);
    const id = localStorage.getItem('userId') || userId;
    return (
        <Bar>
            <Options onClick={() => {
                navigate(`/user/${id}`);
                setUserIdPage(id);
                localStorage.setItem('userIdPage', id)
                }}>
                <BiUser color="#ffffff" size={30} />
            </Options>
            <Options onClick={() => {
                navigate('/find');
            }}>
                <FaUserFriends color='#ffffff' size={30} />
            </Options>
            <Options>
                <BsFillGearFill color='#ffffff' size={30} />
            </Options>
            {/* <Options>
                <FaGamepad color='#ffffff' size={30} />
            </Options> */}
            <Options onClick={() => {
                navigate('/');
                localStorage.clear();
                }}>
                <AiOutlineLogout color='#ffffff' size={30} />
            </Options>
        </Bar>
    )
}