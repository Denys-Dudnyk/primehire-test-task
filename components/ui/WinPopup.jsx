import Image from 'next/image'

const WinPopup = () => {
	return (
		<div className='fixed inset-x-0 top-[195px] xl:top-[115px] bg-[#0A0A0A] overflow-y-auto text-white  animate-slide-up z-20 h-screen  border-t border-white border-opacity-[12%]'>
			<div className='max-w-[425px] mx-auto mb-[220px] '>
				<Image
					src={'/main-image-sm.svg'}
					alt='Main Image'
					width={258}
					height={185}
					draggable='false'
					className='items-center mx-auto mt-6'
				/>
				<div className='px-6 text-left mb-6'>
					<h3 className='text-[32px] leading-[38.4px] font-semibold mt-6 mb-[10px] '>
						You Did It!
					</h3>
					<p className='text-[16px] leading-6'>
						You Won The Limited Edition Jack Daniel's Sinatra Century!
					</p>
				</div>

				<div className='text-left px-6 '>
					<p className='text-[24px] leading-[28.8px] font-semibold mb-[10px]'>
						How To Get Prize?
					</p>
					<ol className='flex flex-col text-white text-opacity-70 text-[16px] leading-6 list-decimal list-inside gap-[10px] capitalize'>
						<li>
							You will be directed to the website of our certified distributors.
						</li>
						<li>
							The Limited Edition Jack Daniel's Sinatra Century will be
							delivered within 5-7 days
						</li>
						<li>The Prize Will Be Delivered Within 5-7 Days.</li>
					</ol>
				</div>
				<div className='px-6'>
					<button
						href={'/'}
						className='flex justify-center items-center gap-[6px] mt-6 w-full bg-[#B9AC90]   py-3'
					>
						<span className='text-black text-[16px] uppercase leading-6 font-bold '>
							Apply Now
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

export default WinPopup
