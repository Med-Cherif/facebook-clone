import { BsCameraVideo, BsEmojiSmile } from "react-icons/bs";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import CreatePostItem from "./CreatePostItem";
import Paper from "./Paper";

const src = require('../../Assets/profile.jpeg');

const colors: any = {
    0: 'text-red-600',
    1: 'text-green-600',
    2: 'text-yellow-400',
}

const list = [
    { text: 'Live video', Icon: BsCameraVideo },
    { text: 'Photo/video', Icon: MdOutlinePhotoLibrary },
    { text: 'Feeling/Activity', Icon: BsEmojiSmile },
].map((item, index) => ({ id: index + 1, ...item }))


const CreatePost = () => {
    return (
        <Paper>
            <div className='flex items-center gap-2'>
                <img className='w-10 h-10 rounded-full' src={src} alt="" />
                <p className='p-3 rounded-full bg-grayColor flex-1 cursor-pointer hover:bg-gray-200'>What's on your mind, Mohamed?</p>
            </div>
            <hr className="my-4" />
            <ul className='flex items-center'>
                {list.map((item, index) => {
                    return <CreatePostItem 
                        key={item.id} 
                        text={item.text} 
                        Icon={<item.Icon className={`${colors[index]} text-2xl`} />} 
                    />
                })}
            </ul>
        </Paper>
    )
}

export default CreatePost