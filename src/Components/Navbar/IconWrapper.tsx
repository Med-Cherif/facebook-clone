import React from 'react'
import { IconType } from 'react-icons/lib'

interface IProps {
    classes?: string[]
    Icon: IconType;
    [prop: string]: any
}

const IconWrapper = ({ Icon, classes, handleClick }: IProps) => {
    
    return (
        <div
            onClick={handleClick ? handleClick : () => {}} 
            className={`${classes ? classes.join(' ') : ''} w-10 h-10 roudned-full bg-slate-200 hover:bg-slate-300 rounded-full flex justify-center items-center text-xl cursor-pointer`}>
            <Icon />
        </div>
    )
}

export default IconWrapper