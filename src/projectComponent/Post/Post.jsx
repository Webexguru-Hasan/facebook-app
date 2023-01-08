import React from 'react'
import { useContext } from 'react'
import { users } from '../Contexts/Contexts'
import postStyle from './Post.module.css'

function Post({post}) {
    const user = useContext(users)

    const {parseUser : userInfo} = user

    console.log(userInfo)

    
    return (
        <>
        {
            user.loading === false ? 'loading____' : (
                <>
                {userInfo && (
            <div className={postStyle.Wrapper}>
                <div className={postStyle.card}>
                    <div className={postStyle.card_banner}>
                        <img src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=" alt="" className={postStyle.card_img} />
                    </div>
                    <div className={postStyle.card_body}>
                        <p>#{post.author.name} #{post?.date}</p>
                       
                        <h2>{post?.title}</h2>
                        <p>{post?.content}</p>
                    </div>
                </div>
            </div>
        )}
                </>
            )
               
            
        }
            
        </>
    )
}

export default Post
