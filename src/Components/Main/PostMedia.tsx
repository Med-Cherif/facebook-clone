interface IProps {
    media: string
}

const PostMedia = ({ media }: IProps) => {
    return (
        <div>
            <img src={media} alt="" />
        </div>
    )
}

export default PostMedia