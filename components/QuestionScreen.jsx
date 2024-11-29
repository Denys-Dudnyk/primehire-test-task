import Image from 'next/image'
import QuestionFooter from './ui/QuestionFooter'
import Questions from './ui/Questions'
import ProgressBarMain from './ui/ProgressBarMain'

const QuestionScreen = ({ currentStep, totalSteps, handleNext }) => {
	return (
		<>
			<div className='flex flex-col items-center justify-center gap-4 text-center max-w-[425px]'>
				<Image
					src={'/title.svg'}
					alt='Exclusive Offer'
					width={214}
					height={36}
					draggable='false'
					priority
				/>
				<h1 className='font-semibold text-[32px]  leading-[38.4px]'>
					<span className='text-[#B9AC90]'>Congratulations!</span> You Could Win
					a Limited Edition Jack Daniel's Sinatra Century!
				</h1>
				<p className='text-white text-opacity-70 text-[14px] leading-[22px] font-normal'>
					Today, 2 June, 2024, you have been chosen to participate in this
					survey.{' '}
					<span className='font-bold text-white'>
						It will only take a minute of your time
					</span>{' '}
					and you can{' '}
					<span className='font-bold text-white'>
						receive a fantastic prize
					</span>
					: Limited Edition Jack Daniel's Sinatra Century!
				</p>
			</div>
			<div className='flex flex-col items-center justify-center  gap-4 text-center max-w-[425px]'>
				<Image
					src={'/main-image.png'}
					alt='Main Image'
					width={358}
					height={280}
					priority
				/>
				<p className='text-white text-opacity-70 text-[14px] leading-[22px] font-normal text-left'>
					Every Sunday we choose 10 random users giving them the{' '}
					<span className='font-bold text-white '>
						chance to win fabulous prizes
					</span>
					. Today's prize is a Limited Edition Jack Daniel's Sinatra Century!{' '}
					<span className='font-bold text-white '>
						There will be 10 lucky winners. Only for those living in the United
						States!
					</span>
					<br />
					<br />
					This survey aims to improve the service for our users.
				</p>
			</div>
			<div className='w-full max-w-md mt-4'>
				<div className='flex items-center justify-center gap-[6px] py-2 bg-[#B9AC90] text-black'>
					<Image
						src={'/warning.svg'}
						alt='Warning'
						width={20}
						height={20}
						draggable='false'
						priority
					/>
					<p className='font-normal text-[12px] xs:text-[11px] leading-6 uppercase'>
						Hurry up! The number of prizes is limited!
					</p>
				</div>

				<div className='px-4 py-6 border border-white border-opacity-[12%] '>
					<ProgressBarMain current={currentStep} total={totalSteps} />
					<Questions step={currentStep} onNext={handleNext} />
				</div>
				<QuestionFooter />
			</div>
		</>
	)
}
export default QuestionScreen
