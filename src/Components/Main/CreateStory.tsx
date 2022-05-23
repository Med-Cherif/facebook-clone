

const src = require('../../Assets/profile.jpeg');


const CreateStory = () => {
    return (
        <div className='h-52 relative cursor-pointer'>
            <img className='h-full w-full object-cover rounded-lg' src={src} alt="" />
            <div className='absolute bottom-0 left-0 w-full h-12 rounded-b-lg bg-white flex justify-center items-end'>
                <div className="add-story w-9 h-9 rounded-full bg-primary absolute left-2/4 -top-[18px] -translate-x-2/4" />
                <p>Create story</p>
            </div>

            

        </div>
    )
}

export default CreateStory