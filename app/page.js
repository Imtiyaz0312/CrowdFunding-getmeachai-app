import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="flex justify-center flex-col gap-4 items-center h-[40vh] text-white">
				<div className="flex items-center gap-4 font-bold text-3xl">Buy Me a Chai <span><img className="w-20 animate-[wiggle_1s_ease-in-out_infinite]" src="icons/tea.png" alt="" /></span></div>
				<p className="py-2 px-5 text-center">A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!</p>
				<div>
					<Link href={"/login"}>
					<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
						<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
							Start Here
						</span>
					</button>
					</Link>

					<Link href={"/about"}>
					<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
						<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
							Read More
						</span>
					</button>
					</Link>
				</div>
			</div>

			<div className="bg-white h-[1px] mx-2 opacity-20"></div>
			<div className=" text-white container mx-auto py-10">
				<h2 className="text-3xl px-4 font-bold text-center mb-10">Your fans can buy you a Chai</h2>
				<div className="flex flex-col justify-around items-center w-full gap-5">

					<div className="item space-y-3 flex flex-col items-center">
						<div className=" bg-slate-600 rounded-full p-6"><img className="w-32" src="/icons/man.png" alt="" /></div>
						<p className="w-2/3 text-center font-semibold">Fund Yourself</p>
						<p className="w-2/3 text-center">Your fans are available for you to help you</p>
					</div>

					<div className="item space-y-3 flex flex-col items-center">
						<div className=" bg-slate-600 rounded-full p-6"><img className="w-32" src="/icons/coin.png" alt="" /></div>
						<p className="w-2/3 text-center font-semibold">Fund Yourself</p>
						<p className="w-2/3 text-center"> Your fans are available for you to help you</p>
					</div>

					<div className="item space-y-3 flex flex-col items-center">
						<div className=" bg-slate-600 rounded-full p-6"><img className="w-32" src="/icons/fund.png" alt="" /></div>
						<p className="w-2/3 text-center font-semibold">Fans want to Help</p>
						<p className="w-2/3 text-center">Your fans are available for you to help you</p>
					</div>

				</div>
			</div>

			<div className="bg-white h-[1px] mx-2 opacity-20"></div>
			<div className=" text-white container mx-auto py-10">
				<h2 className="text-3xl font-bold text-center mb-10">Learn more about us</h2>
				<div className="flex flex-col justify-around items-center w-full gap-5">

					<div className="item space-y-3 flex flex-col items-center">
						<div className=" bg-slate-600 rounded-full p-6"><img className="w-32" src="/icons/man.png" alt="" /></div>
						<p className="w-2/3 text-center font-semibold">Fund Yourself</p>
						<p className="w-2/3 text-center">Your fans are available for you to help you</p>
					</div>

					<div className="item space-y-3 flex flex-col items-center">
						<div className=" bg-slate-600 rounded-full p-6"><img className="w-32" src="/icons/coin.png" alt="" /></div>
						<p className="w-2/3 text-center font-semibold">Fund Yourself</p>
						<p className="w-2/3 text-center"> Your fans are available for you to help you</p>
					</div>

					<div className="item space-y-3 flex flex-col items-center">
						<div className=" bg-slate-600 rounded-full p-6"><img className="w-32" src="/icons/fund.png" alt="" /></div>
						<p className="w-2/3 text-center font-semibold">Fans want to Help</p>
						<p className="w-2/3 text-center">Your fans are available for you to help you</p>
					</div>

				</div>
			</div>

		</>
	);
}
