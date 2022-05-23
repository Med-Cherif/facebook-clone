import { IconType } from "react-icons";

interface IProps {
    text: string;
    Icon: IconType
}

const PostActionItem = ({ text, Icon }: IProps) => {
    return (
        <li className="flex-1 flex items-center justify-center hover:bg-grayColor gap-2 py-2 px-3 rounded-lg cursor-pointer">
            <Icon className='sm:text-xl' />
            <span>{text}</span>
        </li>
    )
}

export default PostActionItem