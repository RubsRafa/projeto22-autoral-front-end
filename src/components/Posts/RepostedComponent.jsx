import { useNavigate } from "react-router-dom";
import { RepostBox, RepostInfo } from "./layout";

export default function RepostedComponent({ p, setUserIdPage, openEdit, openEditBox }) {
    const navigate = useNavigate();
    return (
        <>
            <RepostBox>
                <RepostInfo>
                    <img onClick={() => {
                        navigate(`/user/${p.repostedById}`);
                        setUserIdPage(p.repostedById);
                        localStorage.setItem('userIdPage', p.repostedById)
                    }} src={p.repostedByImage} alt="image_user_reposted" />
                    <h1 onClick={() => {
                        setUserIdPage(p.repostedById)
                        localStorage.setItem('userIdPage', p.repostedById)
                        navigate(`/user/${p.repostedById}`)
                    }}>{p.repostedByName}</h1><h2>repostou isso</h2>
                </RepostInfo>
                {/* <button onClick={() => openEdit(p.id)}>•••</button> */}
                {/* {(openEditBox.includes(p.id)) && <EditPostOptions userReposted={p.repostedById === userLoggedId} userOwnThisPost={p.userId === userLoggedId} />} */}
            </RepostBox>
        </>

    )
}