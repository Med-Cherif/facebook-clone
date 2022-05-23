import { useGlobalState } from "../../AppProvider";
import OnlineContactItem from "./OnlineContactItem";

const picture = require('../../Assets/profile.jpeg');

const list = [
    { name: 'Mohamed Cherif', src: picture },
    { name: 'Mohamed Cherif', src: picture },
    { name: 'Mohamed Cherif', src: picture },
    { name: 'Mohamed Cherif', src: picture },
    { name: 'Mohamed Cherif', src: picture },
    { name: 'Mohamed Cherif', src: picture },
    { name: 'Mohamed Cherif', src: picture },
    { name: 'Mohamed Cherif', src: picture },
    { name: 'Mohamed Cherif', src: picture },
    { name: 'Mohamed Cherif', src: picture },
    { name: 'Mohamed Cherif', src: picture },
    { name: 'Mohamed Cherif', src: picture },
    { name: 'Mohamed Cherif', src: picture },
    { name: 'Mohamed Cherif', src: picture },
].map((item, index) => ({ id: index + 1, ...item }))



const OnlineContact = () => {
    const { onlineContactVisible } = useGlobalState()
    return (
        <div className={`
            online-contact 
            pt-4 
            max-h-[calc(100vh_-_65px)] 
            overflow-auto 
            w-full 
            bg-grayColor 
            z-40 
            ${onlineContactVisible ? 'block' : 'hidden'}
            fixed
            md:sticky 
            md:block
            top-[65px]

        `}>
            <h2 className='px-2 text-gray-500 font-medium mb-3'>Online Friends</h2>
            <ul>
                {list.map((item) => (
                    <OnlineContactItem key={item.id} {...item} />
                ))}
            </ul>
        </div>
    )
}

export default OnlineContact