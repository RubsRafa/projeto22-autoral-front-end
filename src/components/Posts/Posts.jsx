import { BoxPost, NoContent } from './layout';
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Context from "../../contexts/Context";
import { getAllPostsApi } from "../../services/postApi";
// import { getComments, postComment } from '../../services/commentApi';
// import { AiOutlinePlus, AiOutlineStar, AiFillStar } from 'react-icons/ai';
// import { FaRegCommentDots } from 'react-icons/fa';
// import { BsStars } from 'react-icons/bs';
// import { BiRepost } from 'react-icons/bi';
// import { RiSendPlaneLine } from 'react-icons/ri';
// import { deleteLike, getAllUsersLikes, getUserLikes, postLike } from "../../services/likeApi";
// import { postRepost } from "../../services/repostApi";
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

export default function Posts({ refresh, setRefresh }) {
    const [addComment, setAddComment] = useState(false);
    const [existPost, setExistPost] = useState(0);
    const [allPosts, setAllPosts] = useState();
    const [openCommentBox, setOpenCommentBox] = useState([]);
    const [openComments, setOpenComments] = useState([]);

    const { userToken } = useContext(Context);
    const token = userToken || localStorage.getItem('token');

    //  setInterval(() => {
    //     setRefresh(!refresh)
    // }, 25000);

    async function fetchData() {
        try {
            const getAllPosts = await getAllPostsApi(token);
            setAllPosts(getAllPosts);
            setExistPost(getAllPosts.length);

            // const likes = await getUserLikes(token);
            // setPostsLiked(likes);

            // const comments = await getComments(token);
            // setComments(comments);

            // const allUsersLikes = await getAllUsersLikes(token);
            // setAllLikes(allUsersLikes);
        } catch (e) {
            console.log(e)
            toast.error('Houve algum erro ao carregar os posts! =( Desconecte e entre novamente.');
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

    useEffect(() => {
        fetchData();
    }, [refresh]);


    return (
        <>
            {(!existPost || existPost === 0) &&
                <NoContent>Ou você não segue ninguém ainda, ou você não postou nem repostou nada. No fim, a culpa é sua ❤️❤️</NoContent>
            }
            {allPosts?.map((p, i) => (
                <BoxPost>

                    {p.isReposted && <RepostedComponent
                        p={p}
                        setUserIdPage={setUserIdPage}
                    />}

                    <UserInfoComponent />

                    <TextComponent />

                    <ImageComponent />

                    <PostInfoComponent />

                    <OptionsComponent
                        p={p}
                        postsLiked={postsLiked}
                        selectedToComment={selectedToComment}
                    />

                    {(addComment && openCommentBox.includes(p.id)) && <AddCommentComponent
                        userImage={userImage}
                        p={p}
                        selectedToComment={selectedToComment}
                    />}

                    {(openComments.includes(p.id)) &&
                        <CommentBoxComponent />
                    }

                </BoxPost>
            ))}
        </>
    )
}