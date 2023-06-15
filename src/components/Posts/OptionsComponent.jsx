import { Options } from './layout';
import { AiFillStar } from 'react-icons/ai';
import { postRepost } from '../../services/repostApi';
import { deleteLike, postLike } from '../../services/likeApi';
import { useContext } from 'react';
import Context from '../../contexts/Context';
import { toast } from 'react-toastify';

export default function OptionsComponent({ p, postsLiked, selectedToComment }) {
    const { userToken } = useContext(Context);
    const token = userToken || localStorage.getItem('token');


    async function addRepost(postId) {
        const body = {
            postId,
        }
        try {
            await postRepost(body, token);
        } catch (e) {
            console.log(e);
            toast.error('Não foi possível repostar. =( Tente novamente mais tarde.')
        }
    }

    async function addStar(postId) {
        const body = {
            postId,
        }

        try {
            await postLike(body, token);
            setRefresh(!refresh);
        } catch (e) {
            console.log(e);
            toast.error('Não foi possível curtir. =( Tente novamente.')
        }
    }

    async function removeStar(postId) {
        try {
            await deleteLike(postId, token);
            setRefresh(!refresh);
        } catch (e) {
            console.log(e);
            toast.error('Não foi possível descurtir. =( Tente novamente mais tarde.')
        }
    }

    return (
        <Options>
            {(postsLiked.includes(p.id)) ?
                <div onClick={() => removeStar(p.id)}>
                    <AiFillStar color="yellow" size={20} />
                </div>
                :
                <div onClick={() => addStar(p.id)}>
                    <AiOutlineStar color="#fff" size={20} />
                </div>
            }
            <div onClick={() => selectedToComment(p.id)}>
                <FaRegCommentDots color="#fff" size={20} />
            </div>
            <div onClick={() => addRepost(p.id)}>
                <BiRepost color="#fff" size={20} />
            </div>
        </Options>
    )
}