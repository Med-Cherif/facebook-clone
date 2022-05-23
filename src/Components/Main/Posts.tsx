import Post from './Post';

const src = require('../../Assets/profile.jpeg');

const Posts = () => {
    return (
        <div>
            <Post 
                media={src}
                description="Post description"
                comments={62}
                reactions={84}
                createdAt='8 hours ago'
                sharedWith='public'
                creator= {{
                    picture: src,
                    name: 'Mohamed Cherif'
                }}
            />

            <Post 
                media={src}
                description="Post description"
                comments={62}
                reactions={84}
                createdAt='8 hours ago'
                sharedWith='public'
                creator= {{
                    picture: src,
                    name: 'Mohamed Cherif'
                }}
            />

            <Post 
                media={src}
                description="Post description"
                comments={62}
                reactions={84}
                createdAt='8 hours ago'
                sharedWith='public'
                creator= {{
                    picture: src,
                    name: 'Mohamed Cherif'
                }}
            />
        </div>
    )
}

export default Posts