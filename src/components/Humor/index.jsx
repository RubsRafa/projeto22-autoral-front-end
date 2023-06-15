import { useContext, useEffect, useState } from "react";
import { HumorBox } from "./layout";
import { BiLaugh, BiMeh, BiSad, BiSmile, BiTired } from "react-icons/bi";
import { FiTrash, FiEdit2 } from 'react-icons/fi'
import { deleteUserHumorDiary, getUserHumorDiary } from "../../services/healthApi";
import Context from "../../contexts/Context";
import { toast } from "react-toastify";

export default function Humor() {
    const [humors, setHumors] = useState([]);
    const [loading, setLoading] = useState(false);
    const { userToken } = useContext(Context);
    const token = userToken || localStorage.getItem('token');
    const color = '#fff';
    const size = 30;

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            setLoading(true);
            const diary = await getUserHumorDiary(token);
            setHumors(diary);
            console.log(diary)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }

    async function deleteItem(id) {
        try {
            await deleteUserHumorDiary(token, id);
        } catch (e) {
            console.log(e);
        } finally {
            toast.success('Item deletado com sucesso.');
            fetchData();
        }
    }

    return (
        <>
            {loading && <h1>Carregando seu diário...</h1>}
            {!loading && humors[0] &&
                <>
                    {humors.map((h) => (
                        <HumorBox color={h.color}>
                            <div>
                                {h.mood === 1 && <BiTired color={color} size={size} />}
                                {h.mood === 2 && <BiSad color={color} size={size} />}
                                {h.mood === 3 && <BiMeh color={color} size={size} />}
                                {h.mood === 4 && <BiSmile color={color} size={size} />}
                                {h.mood === 5 && <BiLaugh color={color} size={size} />}
                                {h.text && <h1>{h.text}</h1>}
                            </div>
                            <div>
                                <h1>
                                    {h.date.slice(8,10)}/{h.date.slice(5,7)}/{h.date.slice(2,4)}
                                </h1>
                                <div onClick={() => deleteItem(h.id)}><FiTrash /></div>
                                <div><FiEdit2 /></div>
                            </div>

                        </HumorBox>
                    ))}
                </>
            }
        </>
    )
}
