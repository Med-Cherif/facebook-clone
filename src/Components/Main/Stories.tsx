import { BsList } from "react-icons/bs";
import CreateStory from "./CreateStory"
import Story from "./Story"


const src = require('../../Assets/profile.jpeg');

const story = {
    poster: src,
    creator: {
        name: 'Mohamed Cherif',
        picture: src
    }
}

const Stories = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 relative'>
            <CreateStory />
            <Story classes={['hidden', 'md:block']} poster={story.poster} creator={story.creator} />
            <Story classes={['hidden', 'md:block']} poster={story.poster} creator={story.creator} />
            <Story classes={['hidden', 'lg:block']} poster={story.poster} creator={story.creator} />
            <Story classes={['hidden', 'xl:block']} poster={story.poster} creator={story.creator} />
            <div className='hidden absolute w-10 h-10 rounded-full bg-white top-2/4 -right-5 -translate-y-2/4 md:flex items-center z-30 justify-center cursor-pointer'>
                <BsList className='text-xl' />
            </div>
        </div>
    )
}

export default Stories