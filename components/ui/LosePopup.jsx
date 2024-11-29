import Image from 'next/image'

const LosePopup = ({ onClick, isClosing }) => {
	return (
		<div
			className={`fixed inset-x-0 top-[195px] xl:top-[115px]  bg-[#0A0A0A] text-white   z-20 h-screen border-t border-white border-opacity-[12%] ${
				isClosing ? 'animate-slide-down' : 'animate-slide-up'
			}`}
		>
			<div className='max-w-[425px] mx-auto'>
				<Image
					src={'/main-image-sm.svg'}
					alt='Main Image'
					width={258}
					height={185}
					draggable='false'
					className='items-center mx-auto mt-6'
				/>
				<div className='px-6 text-center mb-6'>
					<h3 className='text-[32px] leading-[38.4px] font-semibold mt-6 mb-[10px] '>
						Game Over!
					</h3>
					<p className='text-[16px] leading-6'>
						You have used all attempts. Better luck next time!
					</p>
				</div>
				<div className='px-6'>
					<button
						href={'/'}
						className='flex justify-center items-center gap-[6px] mt-6 w-full bg-[#B9AC90] py-3'
						onClick={onClick}
					>
						<span className='text-black text-[16px] uppercase leading-6 font-bold '>
							Try Again
						</span>

						<Image
							src={'/arrow-right.svg'}
							alt='Apply Now'
							width={24}
							height={24}
							draggable='false'
							className='hover:transition-transform hover:transform-cpu -mt-[2px]'
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default LosePopup
