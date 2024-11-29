'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
	const [timeLeft, setTimeLeft] = useState(8 * 60) // 8 minutes in seconds

	useEffect(() => {
		if (timeLeft > 0) {
			const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000)
			return () => clearInterval(timer)
		}
	}, [timeLeft])

	const formatTime = seconds => {
		const minutes = Math.floor(seconds / 60)
		const secs = seconds % 60
		return `${minutes}M:${secs < 10 ? '0' : ''}${secs + 'S'}`
	}

	return (
		<header className='w-full   text-center text-black'>
			<div className='flex  gap-[6px] justify-center items-center bg-[#B9AC90] py-2 px-0 sm:px-16'>
				<Image src='/timer.svg' alt='Timer' width={20} height={20} />

				<p className='uppercase text-[12px] leading-6'>
					You only have{' '}
					<span className='font-[700]'>{formatTime(timeLeft)}</span>, to
					participate.
				</p>
			</div>
			<div className='py-3 px-4 flex justify-center items-center relative'>
				<Link href={'/'}>
					<Image src='/logo.svg' alt='Logo' width={128.39} height={48} />
				</Link>

				<Link
					href={'/'}
					className='absolute right-0 transform -translate-x-1/2 '
				>
					<Image
						src='/shopping-cart.svg'
						alt='Shopping Cart'
						width={32}
						height={32}
					/>
				</Link>
			</div>
			<div className=' text-[12px] leading-6 text-white px-[11px] py-2 font-normal border-t border-b border-white border-opacity-[12%]'>
				<div className='flex justify-between items-center mx-auto max-w-[425px]'>
					<span>LOYALTY PROGRAM</span>
					<span>2 JUNE 2024</span>
				</div>
			</div>
		</header>
	)
}
export default Header
