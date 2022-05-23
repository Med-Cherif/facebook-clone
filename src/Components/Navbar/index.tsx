import Center from './Center'
import Left from './Left'
import Right from './Right'

const Navbar = () => {
    return (
        <div className="bg-white sticky top-0 px-6 h-[65px] flex items-center justify-between gap-5 border-b z-50">
            <Left />
            <Center />
            <Right />
        </div>
    )
}

export default Navbar