import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import { cards } from '../Cards/card';
import { Navigate } from 'react-router-dom';
import { useNavigate as navigate } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (true) {
        return (
            <>
                <div className='container1'>
                    {/* <Container> */}
                    <div className='Blog'>
                        <div className="letter">B</div>
                        <div className="letter outlined">L</div>
                        <div className="letter outlined">O</div>
                        <div className="letter">G</div>
                    </div>
                    <div className='RestSpace'>
                        <div className="tagline outlined">
                            Write, Share, Inspire: Your Stories, Our Platform
                        </div>
                        <div className="orangeBar"></div>
                    </div>
                    {/* </Container> */}
                </div>
                <div className="container2">
                    <div className='container2Text'>
                        LOGIN TO READ <p>POSTs</p>
                    </div>
                    {/* <div className='CardContainer'>
                        <div className="card">
                            <div className='cardTitle'>
                                <h5>The Villain Who Nearly Ended Reality: Doctor Doom's Most Daring Schemes</h5>
                            </div>
                            <div className='cardImage'>
                                <img src="src/Images_Used/image_1.jpg" alt="" />
                            </div>
                            <div className='CardAuthor'>
                                <p>Author : Samarth Patel</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="cardContainer">
                        {cards.map((card, index) => (
                            <div key={index} className="card">
                                <div className="cardTitle">
                                    <h5>{card.title}</h5>
                                </div>
                                <div className='cardImage'>
                                    <img src={card.image} alt={card.title} />
                                </div>
                                <div className='CardAuthor'>
                                    <p>Author: {card.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cardContainer2">
                        {cards.map((card, index) => (
                            <div key={index} className="card">
                                <div className="cardTitle">
                                    <h5>{card.title}</h5>
                                </div>
                                <div className='cardImage'>
                                    <img src={card.image} alt={card.title} />
                                </div>
                                <div className='CardAuthor'>
                                    <p>Author: {card.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
    return (
        <div>
            <Container>
                <div>
                    {posts.map((post) => (
                        <div key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home