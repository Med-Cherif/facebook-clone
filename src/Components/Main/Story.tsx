import React from 'react'

interface IProps {
    classes?: string[]
    creator: {
        picture: string;
        name: string;
    }
    poster: string
}

const Story = ({ creator, poster, classes }: IProps) => {
    return (
        <div className={`${classes ? classes.join(' ') : ''} story h-52 relative cursor-pointer overflow-hidden rounded-lg`}>
            <img className='min-h-full object-cover rounded-lg hover:scale-105' src={poster} alt="" />
            <p className="absolute bottom-2 left-2 text-white">{creator.name}</p>
            <img src={creator.picture} className="w-10 h-10 rounded-full absolute top-3 left-3 border-4 border-primary" alt="" />
        </div>
    )
}

export default Story