import { AiFillLike } from 'react-icons/ai'

interface IProps {
    reactions: number;
    comments: number
}

const PostStatistics = ({ reactions, comments }: IProps) => {

    const reactionsFormat = reactions === 0 ? 'No reactions' : reactions === 1 ? '1 reaction' : reactions

    const commentsFormat = comments === 0 ? 'No comments' : comments === 1 ? '1 comment' : `${comments} comments`;

    return (
        <div className='px-3 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <AiFillLike className='text-primary text-xl' /> <span>{reactionsFormat}</span>
            </div>

            <span>
                {commentsFormat}
            </span>
        </div>
    )
}

export default PostStatistics