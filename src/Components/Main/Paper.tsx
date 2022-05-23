import React from 'react'

interface IProps { 
    children: React.ReactNode,  
    disableXPadding?: true;
    disableYPadding?: true;
}


const Paper = ({ children, disableYPadding, disableXPadding }: IProps) => {
    return (
        <div className={`${disableXPadding ? '' : 'px-4' } ${disableYPadding ? '' : 'py-2' } bg-white rounded-md my-4`}>
            {children}
        </div>
    )
}

export default Paper