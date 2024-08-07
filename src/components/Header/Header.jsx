import React from 'react'
import { Container, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]


    return (
        <header>
            <Container>
                <nav className='HomeButtonNav'>
                    <div className='Contact'>
                        <a href="https://samp231004.github.io/Portfolio/" target='_blank'><img src="/images/image_12.png" alt="" /></a>
                        <a href="https://www.linkedin.com/in/samp2310/" target='_blank'><img src="/images/image_11.png" alt="" /></a>
                        <a href="https://github.com/SamP231004" target='_blank'><img src="/images/image_13.png" alt="" /></a>
                    </div>
                    <ul className='HomeButtonUl'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name} className='HomeButtonLi'>
                                    <button className='HomeButton'
                                        onClick={() => navigate(item.slug)}
                                    >{item.name}</button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li className='HomeButtonLi'>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header