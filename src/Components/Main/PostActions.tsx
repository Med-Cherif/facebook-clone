import { AiOutlineLike } from "react-icons/ai"
import { RiShareForwardLine } from "react-icons/ri";
import { VscComment } from "react-icons/vsc";
import PostActionItem from "./PostActionItem";

const list = [
    { text: 'Like', Icon: AiOutlineLike },
    { text: 'Comment', Icon: VscComment },
    { text: 'Share', Icon: RiShareForwardLine },
].map((item, index) => ({ id: index + 1, ...item }))

const PostActions = () => {
    return (
        <ul className='flex items-center'>
            {list.map((item) => (
                <PostActionItem key={item.id} {...item} />
            ))}
        </ul>
    )
}

export default PostActions