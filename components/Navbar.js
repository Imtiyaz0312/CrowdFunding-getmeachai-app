"use client"
import React, {useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
	const [showdropdown, setShowdropdown] = useState(false)
	const { data: session } = useSession()
	// console.log(session.user)

	// if (session) {
	// 	return <>
	// 		Signed in as {session.user.email} <br />
	// 		<button onClick={() => signOut()}>Sign out</button>
	// 	</>
	// }
	return (
		<nav className='bg-gray-900 text-white flex justify-between items-center p-3'>
			<Link href={"/"} className='logo font-bold text-xl'>GetMeAChai!</Link>
			{/* <ul className='flex justify-between gap-4'>
			<li>Home</li>
			<li>About</li>
			<li>Projects</li>
			<li>Sign Up</li>
			<li>Login</li>
		</ul> */}
			<div className='relative'>
				{session && <>
					<button id="dropdownDefaultButton" onClick={() => {setShowdropdown(!showdropdown)}} onBlur={() => {setTimeout(() => {
						setShowdropdown(false)
					}, 500);}} data-dropdown-toggle="dropdown" className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> {session.user.name.slice(0,7) + "..."}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
					</svg>
					</button>

					<div id="dropdown" className={`z-10 ${showdropdown ? "": "hidden"} absolute right-3 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
						<ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
							<li>
								<Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
							</li>
							<li>
								<Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
							</li>
							
							<li>
								<Link href="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => signOut()}>Sign out</Link>
							</li>
						</ul>
					</div></>
				}

				{/* {session && <Link href={"/dashpboard"}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Dashboard</button></Link>} */}
				{/* {session &&  <button type="button" onClick={() => signOut()} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log Out</button>} */}

				{!session && <Link href={"/login"}>
					<button onClick={()=>{signIn("github")}} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Log In</button></Link>}
			</div>
		</nav>
	)
}

export default Navbar