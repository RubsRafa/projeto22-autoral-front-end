import { useNavigate } from 'react-router-dom';
import { UserInfoBox, OutFollowBox, ConfigBox } from './layout';
import EditPostOptions from './EditPostOptions';
import { AiOutlinePlus } from 'react-icons/ai';

export default function UserInfoComponent({ p, setUserIdPage, openEditBox, userLoggedId, openEdit }) {
    const navigate = useNavigate();
    return (

        <UserInfoBox>
            <OutFollowBox
                onClick={() => {
                    setUserIdPage(p.Users.id);
                    navigate(`/user/${p.Users.id}`);
                    localStorage.setItem('userIdPage', p.Users.id)
                }}
            >
                <div>
                    <img src={p.Users.image} alt="user_image_post" />
                </div>
                <div>
                    <h1>{p.Users.name}</h1>
                    <span>{p.createdAt >= p.updatedAt
                        ? `• ${p.createdAt.slice(11, 16)} • ${p.createdAt.slice(8, 10)}/${p.createdAt.slice(5, 7)}/${p.createdAt.slice(0, 4)}`
                        : `• $${p.updatedAt.slice(11, 16)} • ${p.updatedAt.slice(8, 10)}/${p.updatedAt.slice(5, 7)}/${p.updatedAt.slice(0, 4)}`}</span>
                </div>
            </OutFollowBox>
            <ConfigBox>
                {!p.isReposted &&
                    <button onClick={() => openEdit(p.id)}>•••</button>
                }
                {!p.isReposted && (openEditBox.includes(p.id)) &&
                    <EditPostOptions userReposted={p.repostedById === userLoggedId} userOwnThisPost={p.userId === userLoggedId} />}
                <button>
                    <AiOutlinePlus color="#fff" size={15} />
                </button>
            </ConfigBox>
        </UserInfoBox>
    )
}