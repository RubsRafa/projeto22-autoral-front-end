import { HumorBox } from "./layout";
import { BiMeh } from 'react-icons/bi';
import { FiTrash, FiEdit2 } from 'react-icons/fi'

export default function Humor() {
    const color = '#fff';
    const size = 30;

    return (
        <>
        <HumorBox color={color}>
            <div>
                <BiMeh color={color} size={size} />
                <h1>Hoje eu me senti um cocô</h1>
            </div>
            <div>
                <h1>Data</h1>
                <div><FiTrash /></div>
                <div><FiEdit2 /></div>
            </div>
            
        </HumorBox>
        </>
    )
}

//BiMeh //BiMehAlt BiMehBlank BiLaugh BiWinkSmile BiUpsideDown BiTired  BiSmile BiSad 