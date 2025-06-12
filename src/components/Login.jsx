import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate("/");
                }
            }
        } 
        catch (error) {
            console.error("Login error:", error);
            setError(error.message || "An unexpected error occurred.");
        }
    };

    return (
        <div className='SigninSignup'>
            <div className={`SigninContainer`}>
                <h2>Sign in to your account</h2>
                
                <form onSubmit={handleSubmit(login)}>
                    <div className='SigninContainerInput'>
                        <Input
                            label="Email: "
                            type="email"
                            defaultValue="one@one.com"
                            {...register("email", {
                                required: "Email is required",
                                validate: value =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Invalid email address",
                            })}
                        />

                        <Input
                            label="Password: "
                            type="password"
                            defaultValue="one@one.com"
                            {...register("password", { required: "Password is required" })}
                        />
                        <Button className="SigninContainerButton" type="submit">Sign in</Button>
                    </div>
                </form>

                <p>
                    Don&apos;t have an account?&nbsp;
                    <Link to="/signup">Sign Up</Link>
                </p>
                {error && <p>{error}</p>}

            </div>
        </div>
    );
}

export default Login;
