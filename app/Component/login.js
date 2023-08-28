"use client"
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { auth, googleAuth } from '../firebase/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")


	const signup = async (e) => {
		e.preventDefault()
		try {
			await createUserWithEmailAndPassword(auth, email, password)
			setEmail("")
			setPassword("")
		} catch (e) {
			console.log(e)
		}
	}

	const signupGoogle = async () => {

		try {
			await signInWithPopup(auth, googleAuth)

		} catch (e) {
			console.log(e)
		}
	}

	const logOut = async () => {
		try {
			await signOut(auth, googleAuth)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<>
			<div className='flex justify-center select-none bg-slate-400 items-center h-screen'>
				<form className='flex flex-col space-y-3 bg-white/50 w-[33vw] h-[60vh] p-4 shadow-lg rounded-2xl'>
					<div className='flex justify-between items-center '>
						<h1 className='text-2xl my-2 font-semibold '>Sign Up</h1>
						<button onClick={logOut} className='font-semibold p-2 px-4 rounded-full bg-black text-white'>Log out</button>
					</div>
					<label className='text-lg font-semibold'>Email</label>
					<input onChange={(e) => setEmail(e.target.value)} type='email' className='p-2 outline-none rounded-xl border-2 shadow-lg ' placeholder='Your Email' />
					<label className='text-lg font-semibold'>Password</label>
					<input onChange={(e) => setPassword(e.target.value)} type='password' className='p-2 outline-none rounded-xl border-2 shadow-lg ' placeholder='Your Password' />
					<div>
						<button onClick={signup} className='p-2 w-full my-3 text-white rounded-full shadow-lg bg-black font-semibold'>Sign Up</button>
						<div className='text-center font-semibold'>OR</div>
						<button onClick={signupGoogle} className='p-2 w-full space-x-2 flex justify-center items-center my-3 text-white rounded-full shadow-lg bg-blue-500 font-semibold'>
							<FcGoogle className='text-2xl' /> <p>Sign In With Google
							</p></button>
					</div>

				</form>
			</div>
		</>
	)
}

export default Login