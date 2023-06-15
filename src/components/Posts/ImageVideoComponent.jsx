import { MainImageVideoBox } from './layout';

export default function ImageComponent({ p }) {
    return (
        <MainImageVideoBox>
            <img src={p.image} alt="post_image" />
            <video src={p.video} alt="post_video"></video>
        </MainImageVideoBox>
    )
}