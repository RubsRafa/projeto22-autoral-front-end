import { AddComment, CommentForm } from './layout';
import { postComment } from '../../services/commentApi';
import { toast } from 'react-toastify';

export default function AddCommentComponent({userImage, p, selectedToComment}) {
    const [comment, setComment] = useState('');

    async function sendComment(e, postId) {
        e.preventDefault();

        const body = {
            postId,
            comment,
        }
        try {
            await postComment(body, token);
            selectedToComment(postId);
            setRefresh(!refresh);
        } catch (e) {
            console.log(e);
            toast.error('Não foi possível comentar. =( Tente novamente.')
        }
    }
    return (
        <AddComment>
            <img src={userImage || localStorage.getItem('userImage')} alt="user_image" />
            <CommentForm onSubmit={(e) => sendComment(e, p.id)}>
                <input onChange={(e) => setComment(e.target.value)} value={comment} placeholder="Comentar..." type="text" minLength={3} maxLength={250} required></input>
                <button type="submit">
                    <RiSendPlaneLine color="#fff" size={25} />
                </button>
            </CommentForm>
        </AddComment>
    )
}