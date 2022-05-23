import React from 'react'
import Paper from './Paper';
import PostActions from './PostActions';
import PostHeader from './PostHeader';
import PostMedia from './PostMedia';
import PostStatistics from './PostStatistics';


interface IProps {
    media?: string;
    description?: string;
    comments: number;
    reactions: number;
    createdAt: string;
    sharedWith: 'public'
    creator: {
        picture: string;
        name: string
    }
}

const Post = ({ creator, ...rest }: IProps) => {
    return (
        <Paper disableXPadding>
            <PostHeader 
                creator={creator} 
                createdAt={rest.createdAt} 
                sharedWith={rest.sharedWith} 
                description={rest.description}
            />
            {
                rest.media && <PostMedia media={rest.media} />
            }

            <div className='px-3 pt-2'>
                <PostStatistics comments={rest.comments} reactions={rest.reactions} />
                <hr className='my-2' />
                <PostActions /> 
            </div>
        </Paper>
    )
}

export default Post