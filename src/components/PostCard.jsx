import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage, Content, userID }) {
    return (
        <Link className='PostLink' to={`/post/${$id}`}>
            <div className='PostCard'>
                <div>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} />
                </div>
                {/* <h2>{title}</h2> */}
                <div className='PostContent' dangerouslySetInnerHTML={{ __html: Content }} />
                {/* <div>{userID}</div> */}
            </div>
        </Link>
    )
}


export default PostCard