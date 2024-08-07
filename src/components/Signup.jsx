import React, { useState } from 'react'
import authService from '../appwrite/auth.js'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice.js'
import { Button, Input } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='SigninSignup'>
            <div className={`SigninContainer`}>
                <h2>Sign up to create account</h2>
                
                <form onSubmit={handleSubmit(create)}>
                    <div className='SigninContainerInput'>
                        <Input
                            label="Full Name: "
                            // placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email: "
                            // placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            // placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" className="SigninContainerButton">
                            Create Account
                        </Button>
                    </div>
                </form>

                <p>
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p>{error}</p>}
            </div>
        </div>
    )
}

export default Signup