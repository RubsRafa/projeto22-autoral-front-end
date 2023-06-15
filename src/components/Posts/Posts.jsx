import { BoxPost, NoContent } from './layout';
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Context from "../../contexts/Context";
import { getAllPostsApi, getUserPostsApi } from "../../services/postApi";
// import { getComments, postComment } from '../../services/commentApi';
// import { AiOutlinePlus, AiOutlineStar, AiFillStar } from 'react-icons/ai';
// import { FaRegCommentDots } from 'react-icons/fa';
// import { BsStars } from 'react-icons/bs';
// import { BiRepost } from 'react-icons/bi';
// import { RiSendPlaneLine } from 'react-icons/ri';
// import { deleteLike, getAllUsersLikes, getUserLikes, postLike } from "../../services/likeApi";
// import { o } from "../../services/repostApi";
// import UsersLikeInfo from "../UsersLikeInfo";
// import { Tooltip as ReactTooltip } from "react-tooltip";
// import EditPostOptions from "../EditPostOptions";
// import { useNavigate } from "react-router-dom";
import RepostedComponent from './RepostedComponent';
import UserInfoComponent from './UserInfoComponent';
import TextComponent from './TextComponent';
import ImageComponent from './ImageVideoComponent';
import PostInfoComponent from './PostInfoComponent';
import OptionsComponent from './OptionsComponent';
import AddCommentComponent from './AddCommentComponent';
import CommentBoxComponent from './CommentBoxComponent';
import { getAllUsersLikes } from '../../services/likeApi';

export default function Posts({ refresh, setRefresh, id, isTimeline }) {
    const [loading, setLoading] = useState(false);
    const [addComment, setAddComment] = useState(false);
    const [existPost, setExistPost] = useState(0);
    const [allPosts, setAllPosts] = useState();
    const [openCommentBox, setOpenCommentBox] = useState([]);
    const [openComments, setOpenComments] = useState([]);
    const [showLikes, setShowLikes] = useState(false);
    const [openEditBox, setOpenEditBox] = useState([]);
    const [allLikes, setAllLikes] = useState([]);

    const { userImage, userToken, userId, setUserIdPage, userIdPage } = useContext(Context);
    const idPage = id || userIdPage || localStorage.getItem('userIdPage')
    const token = userToken || localStorage.getItem('token');
    const userLoggedId = userId || localStorage.getItem('userId')

    //  setInterval(() => {
    //     setRefresh(!refresh)
    // }, 25000);

    async function fetchDataAll() {
        try {
            setLoading(true);
            const getAllPosts = await getAllPostsApi(token);
            setAllPosts(getAllPosts);
            setExistPost(getAllPosts.length);

            // const likes = await getUserLikes(token);
            // setPostsLiked(likes);

            // const comments = await getComments(token);
            // setComments(comments);

            const allUsersLikes = await getAllUsersLikes(token);
            setAllLikes(allUsersLikes);
        } catch (e) {
            console.log(e)
            toast.error('Houve algum erro ao carregar os posts! =( Desconecte e entre novamente.');
        } finally {
            setLoading(false);
        }
    };

    async function fetchDataUser() {
        try {
            setLoading(true);
            const getAllPosts = await getUserPostsApi(token, idPage);
            setAllPosts(getAllPosts);
            setExistPost(getAllPosts.length);

            // const likes = await getUserLikes(token);
            // setPostsLiked(likes);

            // const comments = await getComments(token);
            // setComments(comments);

            const allUsersLikes = await getAllUsersLikes(token);
            setAllLikes(allUsersLikes);
        } catch (e) {
            console.log(e)
            toast.error('Houve algum erro ao carregar os posts! =( Desconecte e entre novamente.');
        } finally{
            setLoading(false);
        }
    };

    function selectedToComment(i) {
        setAddComment(!addComment);
        setOpenCommentBox((prevOpenCommentBox) => {
            if (prevOpenCommentBox.includes(i)) {
                return prevOpenCommentBox.filter((p) => p !== i);
            } else {
                return [...prevOpenCommentBox, i];
            }
        });
    }

    function openComment(i) {
        setOpenComments((prevOpenComment) => {
            if (prevOpenComment.includes(i)) {
                return prevOpenComment.filter((p) => p !== i);
            } else {
                return [...prevOpenComment, i];
            }
        });
    }

    function openEdit(i) {
        setOpenEditBox((prevOpenEditBox) => {
            if (prevOpenEditBox.includes(i)) {
                return [];
            } else {
                return [i];
            }
        });
    }

    useEffect(() => {
        if (!isTimeline && (id || userIdPage)) {
            fetchDataUser();
        } else {
            fetchDataAll();
        }
    }, [refresh]);


    return (
        <>
        {loading && 
        <NoContent>Carregando informações! Aguarde que estou indo de jegue...</NoContent>
        }
        {!isTimeline && (id || userIdPage) && !loading && !existPost &&
        <NoContent>Esse usuário ainda não postou nem repostou nada.</NoContent>
        }
            {isTimeline && !id && (!existPost || existPost === 0) && !loading &&
                <NoContent>Ou você não segue ninguém ainda, ou você não postou nem repostou nada. No fim, a culpa é sua ❤️❤️</NoContent>
            }
            {allPosts?.map((p, i) => (
                <BoxPost key={i}>

                    {p.isReposted && <RepostedComponent
                        p={p}
                        setUserIdPage={setUserIdPage}
                        openEdit={openEdit}
                        openEditBox={openEditBox}
                        userLoggedId={userLoggedId}
                    />}

                    <UserInfoComponent
                        p={p}
                        setUserIdPage={setUserIdPage}
                        openEditBox={openEditBox}
                        userLoggedId={userLoggedId}
                        openEdit={openEdit}
                    />

                    <TextComponent
                        p={p}
                    />

                    <ImageComponent
                        p={p}
                    />

                    <PostInfoComponent
                        p={p}
                        openComment={openComment}
                        showLikes={showLikes}
                        setShowLikes={setShowLikes}
                        allLikes={allLikes}
                    />

                    <OptionsComponent
                        p={p}
                        selectedToComment={selectedToComment}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />

                    {(addComment && openCommentBox.includes(p.id)) && <AddCommentComponent
                        userImage={userImage}
                        p={p}
                        selectedToComment={selectedToComment}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />}

                    {(openComments.includes(p.id)) &&
                        <CommentBoxComponent
                            setUserIdPage={setUserIdPage}
                            refresh={refresh}
                            p={p}
                        />
                    }

                </BoxPost>
            ))}
        </>
    )
}