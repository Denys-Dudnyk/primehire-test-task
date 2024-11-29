import { useState } from 'react'
import Image from 'next/image'
import LosePopup from './ui/LosePopup'
import WinPopup from './ui/WinPopup'

const GameScreen = () => {
	const [openedBoxes, setOpenedBoxes] = useState(Array(9).fill(false))
	const [attempt, setAttempt] = useState(1)
	const [winningBox, setWinningBox] = useState(Math.floor(Math.random() * 9))
	const [gameResult, setGameResult] = useState(null)
	const [popup, setPopup] = useState(null)
	const [isClosing, setIsClosing] = useState(false)

	const handleBoxClick = index => {
		if (openedBoxes[index] || gameResult) return

		setOpenedBoxes(prev => {
			const updated = [...prev]
			updated[index] = true
			return updated
		})

		if (index === winningBox) {
			setGameResult('win')
			setTimeout(() => {
				setPopup('win')
			}, 5500)
		} else if (attempt < 3) {
			setAttempt(prev => prev + 1)
		} else {
			setGameResult('lose')
			setTimeout(() => {
				setPopup('lose')
			}, 2500)
		}
	}

	const closePopup = () => {
		setIsClosing(true)
		setTimeout(() => {
			setPopup(null)
			setIsClosing(false)
		}, 1500)
	}

	const resetGame = () => {
		setOpenedBoxes(Array(9).fill(false))
		setAttempt(1)
		setWinningBox(Math.floor(Math.random() * 9))
		setGameResult(null)
		closePopup()
	}

	return (
		<div className='text-center mt-9 px-4'>
			<div className='flex justify-center mt-6 px-4 xs:px-0 gap-2 mb-6'>
				<button
					className={`bg-[#fff] bg-opacity-[6%] px-[32px] xs:px-[24px] py-3   font-semibold text-[12px]  leading-4 ${
						attempt === 1
							? 'bg-black border border-[#B9AC90] text-[#B9AC90] '
							: 'text-[#fff]'
					}`}
				>
					1st Try
				</button>
				<button
					className={`bg-[#fff] bg-opacity-[6%] px-[32px] xs:px-[24px] py-3  font-semibold text-[12px] leading-4  ${
						attempt === 2
							? 'bg-black border border-[#B9AC90] text-[#B9AC90] '
							: 'text-[#fff]'
					}`}
				>
					2nd Try
				</button>
				<button
					className={`bg-[#fff] bg-opacity-[6%] px-[32px] xs:px-[24px] py-3  font-semibold text-[12px] leading-4  ${
						attempt === 3
							? 'bg-black border border-[#B9AC90] text-[#B9AC90] '
							: 'text-[#fff]'
					}`}
				>
					3rd Try
				</button>
			</div>

			<div className='grid grid-cols-3 gap-4 px-4'>
				{Array.from({ length: 9 }).map((_, index) => (
					<div
						key={index}
						className={`relative w-[70.56px] h-[90px] mx-auto flex justify-center items-center ${
							!openedBoxes[index] ? 'animate-box-shake' : ''
						}`}
						onClick={() => handleBoxClick(index)}
					>
						<div
							className={`absolute w-full h-full z-10  transition-transform duration-700 ${
								openedBoxes[index]
									? index === winningBox
										? 'animate-lid-open-win'
										: 'animate-lid-open'
									: ''
							}`}
						>
							<Image
								src='/top.svg'
								alt='Lid'
								width={70.56}
								height={36.91}
								className={`object-cover ${
									openedBoxes[index] && index === winningBox
										? ' delay-[4000]'
										: ''
								}`}
							/>
						</div>

						<div className='absolute w-[86px] h-[18px] right-[0px] top-[18px] z-[5] flex justify-center items-center '>
							<svg
								width='95'
								height='43'
								viewBox='0 0 95 43'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className={`${openedBoxes[index] ? 'animate-light-fade' : ''} `}
							>
								<g filter='url(#filter0_f_8002_8771)'>
									<path
										d='M51.6048 30.8359L96.8564 21.9485L51.6048 12.8359V30.8359Z'
										fill='#FFBE00'
									/>
									<path
										d='M10.8564 22.0024L51.6048 30.8359V12.8359L10.8564 22.0024Z'
										fill='#FFA200'
									/>
								</g>
								<defs>
									<filter
										id='filter0_f_8002_8771'
										x='-1.14355'
										y='0.835938'
										width='110'
										height='42'
										filterUnits='userSpaceOnUse'
										colorInterpolationFilters='sRGB'
									>
										<feFlood floodOpacity='0' result='BackgroundImageFix' />
										<feBlend
											mode='normal'
											in='SourceGraphic'
											in2='BackgroundImageFix'
											result='shape'
										/>
										<feGaussianBlur
											stdDeviation='6'
											result='effect1_foregroundBlur_8002_8771'
										/>
									</filter>
								</defs>
							</svg>
						</div>

						<div className='w-full h-full rounded-lg flex justify-center items-center shadow-lg z-[1]'>
							<Image src='/box.svg' alt='Box' width={70.56} height={53.16} />
						</div>
						<div className='absolute -right-[1px] bottom-[18px] z-0 w-full h-full rounded-lg flex justify-center shadow-lg'>
							<Image src='/middle.svg' alt='Box' width={68.47} height={14.34} />
						</div>

						{openedBoxes[index] && index === winningBox && (
							<div className='absolute top-[30px] w-full flex justify-center items-center animate-prize-slide'>
								<Image
									src='/win.svg'
									alt='Prize'
									width={100.93}
									height={49.99}
								/>
							</div>
						)}
					</div>
				))}
			</div>

			{popup === 'win' && <WinPopup />}

			{popup === 'lose' && (
				<LosePopup onClick={resetGame} isClosing={isClosing} />
			)}
		</div>
	)
}

export default GameScreen
