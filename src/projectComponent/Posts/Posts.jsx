import React from 'react'
import { useEffect } from 'react'
import Post from '../Post/Post.jsx'

function Posts() {
    const [posts, setpost] = React.useState([])
    

    useEffect(() => {
        fetch('https://blogs-webiste-api.onrender.com/post')
        .then((res) => res.json())
        .then((data) => setpost(data))
        .catch( (error) => console.error(error.message))
    }, [])
    return (
        <div>
            {posts.map((post) => (
                
                <Post key={post._id} post={post} />
            ))}
            
        </div>
    )
    
}

export default Posts
