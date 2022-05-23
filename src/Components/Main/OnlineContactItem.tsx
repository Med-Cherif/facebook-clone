import React from 'react'
import GreenDot from './GreenDot';

interface IProps {
    src: string;
    name: string
}

const OnlineContactItem = ({ name, src }: IProps) => {
    return (
        <li className='flex items-center gap-2 py-1.5 px-2 cursor-pointer hover:bg-gray-300 rounded-md'>
            <div className='relative'>
                <img src={src} alt={name} className="w-8 h-8 rounded-full" />
                <GreenDot />
            </div>
            <span className='font-medium text-base'>{name}</span>
        </li>
    )
}

export default OnlineContactItem