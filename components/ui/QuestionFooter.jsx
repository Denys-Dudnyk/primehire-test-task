const QuestionFooter = () => {
	return (
		<>
			<div className='grid grid-cols-3 text-center items-center px-[11px] py-4 border border-t-0 border-white border-opacity-[12%] mb-[74px]'>
				<div>
					<p className='text-[12px] xs:text-[11px] text-[#B9AC90] font-semibold leading-4'>
						Exclusive Prizes
					</p>
				</div>

				<div className='relative'>
					<div className='absolute top-1/2 -translate-y-1/2 left-0 h-4 w-[1px] bg-white bg-opacity-[36%]'></div>
					<div className='absolute top-1/2 -translate-y-1/2 right-0 h-4 w-[1px] bg-white bg-opacity-[36%]'></div>
					<p className='text-[12px] xs:text-[11px] text-[#B9AC90] font-semibold leading-4 '>
						Quick and Easy
					</p>
				</div>

				<div>
					<p className='text-[12px] xs:text-[11px] text-[#B9AC90] font-semibold leading-4 '>
						Only 6 left
					</p>
				</div>
			</div>
		</>
	)
}
export default QuestionFooter
