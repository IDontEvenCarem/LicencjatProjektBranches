import { Link } from "react-router-dom";
import { textToLoremLink } from "../../Constants";

export default function NewsCard (props: {id: number, title: string}) {
    const onMouseMove : React.MouseEventHandler<HTMLAnchorElement> = ev => {
        const targetRect = ev.currentTarget.getBoundingClientRect();
        const localPosX = (ev.clientX - targetRect.x - targetRect.width/2) / targetRect.width * 2
        const localPosY = (ev.clientY - targetRect.y - targetRect.height/2) / targetRect.height * 2
        ev.currentTarget.style.setProperty('--hover-x', localPosX.toString())
        ev.currentTarget.style.setProperty('--hover-y', localPosY.toString())
    }

    const onMouseLeave : React.MouseEventHandler<HTMLAnchorElement> = ev => {
        ev.currentTarget.style.setProperty('--hover-x', '0')
        ev.currentTarget.style.setProperty('--hover-y', '0')
    }

    return <Link to={`/article/${props.id}`} className='lorem-card ac' onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
        <img src={textToLoremLink(props.title, 450, 300)} width={450} height={300}></img>
        <div className='title'>{props.title}</div>
    </Link>
}