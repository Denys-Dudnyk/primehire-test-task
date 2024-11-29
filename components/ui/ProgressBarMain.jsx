const ProgressBarMain = ({ current, total }) => {
	return (
		<div className='flex items-center gap-2 w-full'>
			{Array.from({ length: total }).map((_, index) => (
				<div
					key={index}
					className={`flex-1 h-1 overflow-hidden bg-white bg-opacity-[12%]`}
				>
					<div
						className={`h-full bg-[#B9AC90] transition-all duration-200 ease-out`}
						style={{
							width:
								index < current ? '100%' : index === current ? '100%' : '0%',
						}}
					></div>
				</div>
			))}
		</div>
	)
}

export default ProgressBarMain
