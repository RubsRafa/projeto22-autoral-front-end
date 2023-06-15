import { useContext, useRef, useState } from "react";
import { ColorPicker, CreationBox, Pickers, TextInput } from "./layout";
import { BiLaugh, BiMeh, BiSad, BiSmile, BiTired } from "react-icons/bi";
import { postUserHumorDiary } from "../../services/healthApi";
import Context from "../../contexts/Context";

export default function CreateHumor() {
    const [humorColor, setHumorColor] = useState('#222');
    const [mood, setMood] = useState(3);
    const textRef = useRef();
    const color = "#fff";
    const size = 35;
    const { userToken, userImage } = useContext(Context);
    const token = userToken || localStorage.getItem('token');
    const image = userImage || localStorage.getItem('userImage')

    async function saveMood() {
        try {
            const body = {
                text: textRef.current.value,
                color: humorColor,
                mood,
            }
            await postUserHumorDiary(token, body);
        } catch (e) {
            console.log(e);
        } finally {
            setHumorColor('#222');
            setMood(3)
        }
    }

    return (
        <CreationBox color={humorColor}>
            <div>
                <img src={image} alt="user_image" />
                <TextInput autoComplete="off" ref={textRef} placeholder="Eu estou..."></TextInput>
            </div>
            <Pickers>
                <div>
                    <h1>Escolha uma cor para o seu humor</h1>
                    <ColorPicker autoComplete="off" onChange={(e) => setHumorColor(e.target.value)} value={humorColor} type="color"></ColorPicker>
                </div>
                <div>
                    <h1>Escolha uma carinha</h1>
                    <BiTired onClick={() => setMood(1)} color={color} size={size} />
                    <BiSad onClick={() => setMood(2)} color={color} size={size} />
                    <BiMeh onClick={() => setMood(3)} color={color} size={size} />
                    <BiSmile onClick={() => setMood(4)} color={color} size={size} />
                    <BiLaugh onClick={() => setMood(5)} color={color} size={size} />
                </div>
                <div>
                    <button onClick={() => saveMood()}>Salvar</button>
                </div>
            </Pickers>
        </CreationBox>
    )
}