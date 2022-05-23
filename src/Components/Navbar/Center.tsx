import { MdOutlineOndemandVideo } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { BsShopWindow } from 'react-icons/bs';
import { RiGroupLine } from 'react-icons/ri';
import { SiFacebookgaming } from 'react-icons/si';
import { useState } from 'react';

const list = [
    { id: 1, Icon: AiOutlineHome, link: '/' },
    { id: 2, Icon: MdOutlineOndemandVideo, link: '/' },
    { id: 3, Icon: BsShopWindow, link: '/' },
    { id: 4, Icon: RiGroupLine, link: '/' },
    { id: 5, Icon: SiFacebookgaming, link: '/' },
]

const Center = () => {
    const [activeItem, setActiveItem] = useState(0);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
        e.preventDefault()
        setActiveItem(index);
    }

    return (
        <ul className="hidden sm:flex h-full">
            {list.map((item, index) => {
                const isHiddenInLessThanLargeScreens = (index === 2 || index === 4) ? true : false
                return <li 
                    key={item.id}
                    className={`${isHiddenInLessThanLargeScreens ? 'hidden lg:flex' : ''} h-full ${activeItem === index ? "border-b-2 border-primary" : ""} flex items-center w-14 md:w-28 justify-center p-1`}
                >
                    <a 
                        onClick={e => handleClick(e, index)}
                        href={item.link} 
                        className={`text-3xl w-full h-full flex justify-center items-center rounded-xl transition-[background-color] hover:bg-slate-100 ${activeItem === index ? "text-primary" : ""}`}
                    >
                        <item.Icon />
                    </a>
                </li>
            })}
        </ul>
    )
}

export default Center