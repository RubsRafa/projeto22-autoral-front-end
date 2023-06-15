import { useNavigate } from 'react-router-dom';
import { CommentBox, UserComment } from './layout';

export default function CommentBoxComponent({ setUserIdPage, c}) {
    const navigate = useNavigate();
    return (
        <CommentBox>
            {comments.map((c) => {
                if (c.postId === p.id) {
                    return (
                        <UserComment>
                            <img onClick={() => {
                                navigate(`/user/${c.Users.id}`);
                                setUserIdPage(c.Users.id);
                                localStorage.setItem('userIdPage', c.Users.id)
                            }} src={c.Users.image} alt="image_user_comment" />
                            <div>
                                <h1 onClick={() => {
                                    setUserIdPage(c.Users.id);
                                    localStorage.setItem('userIdPage', c.Users.id)
                                    navigate(`/user/${c.Users.id}`);
                                }}>{c.Users.name}<span>{c.createdAt >= c.updatedAt
                                    ? ` • ${c.createdAt.slice(11, 16)} • ${c.createdAt.slice(8, 10)}/${c.createdAt.slice(5, 7)}/${c.createdAt.slice(0, 4)}`
                                    : ` • $${c.updatedAt.slice(11, 16)} • ${c.updatedAt.slice(8, 10)}/${c.updatedAt.slice(5, 7)}/${c.updatedAt.slice(0, 4)}`}</span></h1>
                                <h2>{c.comment}</h2>
                            </div>
                        </UserComment>
                    )
                }
            })}
        </CommentBox>
    )
}