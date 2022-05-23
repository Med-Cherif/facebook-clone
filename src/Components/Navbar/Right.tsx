import { IoApps, IoNotificationsSharp } from "react-icons/io5";
import { RiMessengerFill, RiArrowDownSFill } from "react-icons/ri";
import { useGlobalState } from "../../AppProvider";
import IconWrapper from "./IconWrapper";

const image = require('../../Assets/profile.jpeg');

const Right = () => {

    const { toggleSidebar, toggleOnlineContact } = useGlobalState()

    return (
        <div className='flex items-center gap-2'>
            <div className='hidden lg:flex items-center hover:bg-slate-200 p-1 pr-3 rounded-full gap-1 cursor-pointer'>
                <img 
                    src={image} 
                    alt="" 
                    className="w-7 h-7 rounded-full"
                />
                <h3 className='font-medium'>Mohamed</h3>
            </div>

            <IconWrapper handleClick={toggleSidebar} Icon={IoApps} />
            <IconWrapper classes={['hidden', 'md:flex']} Icon={IoNotificationsSharp} />
            <IconWrapper handleClick={toggleOnlineContact} Icon={RiMessengerFill} />
            <IconWrapper Icon={RiArrowDownSFill} />

        </div>
    )
}

export default Right