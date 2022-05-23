
interface IProps {
    src: string;
    text: string
}

const SidebarLink = ({ src, text }: IProps) => {
    return (
        <li>
            <a href="/" className="flex items-center gap-2 py-1.5 px-2 hover:bg-gray-300 rounded-md">
                <img src={src} alt="" className="w-9 h-9 rounded-full" />
                <span>{text}</span>
            </a>
        </li>
    )
}

export default SidebarLink