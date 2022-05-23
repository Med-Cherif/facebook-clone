import { FaFacebook } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRef } from 'react';

const Left = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const focusOnInput = () => {
        if (!inputRef.current) return;

        inputRef.current.focus()
    }

    return (
        <div className='flex items-center gap-4'>
            <div>
                <FaFacebook className='text-5xl text-primary' />
            </div>
            <div 
                onClick={focusOnInput} 
                className='grid grid-cols-1 xl:grid-cols-[auto_1fr] xl:w-64 w-11 h-11 gap-2 rounded-full bg-grayColor items-center xl:pl-4 place-items-center xl:justify-items-start'
            >
                <AiOutlineSearch className='text-xl' />
                <input ref={inputRef} type="text" placeholder='Search Facebook' className="hidden xl:block h-full bg-transparent border-none outline-none" />
            </div>
        </div>
    )
}

export default Left