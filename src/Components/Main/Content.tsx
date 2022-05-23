import CreatePost from "./CreatePost"
import Posts from "./Posts"
import Stories from "./Stories"

const Content = () => {
    return (
        <div className='p-2 md:p-4'>
            <div>
                <Stories />
                <div className='w-full max-w-[500px] mx-auto'>
                    <CreatePost />
                    <Posts />
                </div>
            </div>
        </div>
    )
}

export default Content