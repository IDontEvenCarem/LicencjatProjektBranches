import { funkyTitles } from "./Constants";
import { useParams } from 'react-router-dom'
import Shell from "./Shell";

export default function Article () {
    const params = useParams()

    return (
        <Shell>
            {funkyTitles[parseInt(params['articleId'] as string)]}
        </Shell>
    )
}