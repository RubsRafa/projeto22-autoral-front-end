import { useRef, useState } from "react";
import { ColorPicker, CreationBox, Pickers, TextInput } from "./layout";
import { BiLaugh, BiMeh, BiSad, BiSmile, BiTired } from "react-icons/bi";

export default function CreateHumor() {
    const [humorColor, setHumorColor] = useState('#222');
    const [mood, setMood] = useState(3);
    const textRef = useRef();
    const color = "#fff";
    const size = 35;

    async function saveMood(e) {
        console.log('humor', textRef.current.value, humorColor, mood)
    }

    return (
        <CreationBox color={humorColor}>
            <div>
                <img src="" alt="user_image" />
                <TextInput ref={textRef} placeholder="Eu estou..."></TextInput>
            </div>
            <Pickers>
                <div>
                    <h1>Escolha uma cor para o seu humor</h1>
                    <ColorPicker onChange={(e) => setHumorColor(e.target.value)} value={humorColor} type="color"></ColorPicker>
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