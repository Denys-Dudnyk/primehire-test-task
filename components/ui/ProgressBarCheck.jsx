import { useState, useEffect, memo } from 'react'

export const ProgressBarCheck = memo(({ duration, onComplete }) => {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const start = Date.now()

		const interval = setInterval(() => {
			const elapsed = Date.now() - start
			const percentage = Math.min((elapsed / duration) * 100, 100)
			setProgress(percentage)

			if (percentage === 100) {
				clearInterval(interval)
				onComplete && onComplete()
			}
		}, 50)

		return () => clearInterval(interval)
	}, [duration, onComplete])

	return (
		<div className='relative w-full h-1 bg-white bg-opacity-[12%] overflow-hidden'>
			<div
				className='absolute top-0 left-0 h-full bg-[#B9AC90] transition-all ease-linear'
				style={{ width: `${progress}%` }}
			></div>
		</div>
	)
})
