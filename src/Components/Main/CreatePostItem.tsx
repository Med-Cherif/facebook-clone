import React from 'react'
import { IconType } from 'react-icons'

interface IProps {
    Icon: JSX.Element,
    text: string
}

const CreatePostItem = ({ text, Icon }: IProps) => {
    return (
        <li className='flex-1 flex items-center justify-center hover:bg-grayColor gap-2 py-2 px-3 rounded-lg cursor-pointer last:hidden last:md:flex'>
            {Icon}
            <span>{text}</span>
        </li>
    )
}

export default CreatePostItem