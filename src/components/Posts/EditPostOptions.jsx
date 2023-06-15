import { Item } from './layout';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

export default function EditPostOptions({ userReposted, userOwnThisPost }) {
    return (
        <>
            <Item>
                <>
                    {userReposted &&
                        <div>
                            <AiFillDelete color="#fff" size={15} />
                            <h1>Apagar repost</h1>
                        </div>}
                </>
                <>
                    {userOwnThisPost &&
                        <div>
                            <AiFillDelete color="#fff" size={15} />
                            <h1>Apagar post</h1>
                        </div>}
                    {/* <div>
                        <AiFillEdit color="#fff" size={15} />
                        <h1>Editar post</h1>
                    </div> */}
                </>
            </Item>
        </>
    )
}
