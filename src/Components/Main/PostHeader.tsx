import { BsThreeDots } from "react-icons/bs";
import { MdOutlinePublic } from "react-icons/md";


interface IProps {
    creator: {
        picture: string;
        name: string
    },
    sharedWith: 'public'
    createdAt: string;
    description?: string
}

const PostHeader = ({ creator, createdAt, sharedWith, description }: IProps) => {
    return (
        <div className="px-4">
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img 
                        className='w-10 h-10 rounded-full'
                        src={creator.picture} 
                        alt={creator.name} 
                    />
                    <div>
                        <h2>{creator.name}</h2>
                        <div className='flex items-center gap-1'>
                            <span className='text-xs'>{createdAt}</span>
                            <span>.</span>
                            {sharedWith === 'public' && <span><MdOutlinePublic /></span>}
                        </div>
                        
                    </div>
                </div>
                <BsThreeDots className='text-xl cursor-pointer' />
            </div>

            {description && <p className='my-2'>{description}</p>}

        </div>
    )
}

export default PostHeader