const Questions = ({ step, onNext }) => {
	const questions = [
		{
			id: 'gender',
			text: 'Question 1 of 4:  Are you a man or a woman?',
			options: ['Man', 'Woman'],
		},
		{
			id: 'age',
			text: 'Question 2 of 4:  How old are you?',
			options: ['18-29', '30-39', '40-49', '50+'],
		},
		{
			id: 'family',
			text: 'Question 3 of 4:  How many members are in your family?',
			options: ['Alone', '1', '2', '3+'],
		},
		{
			id: 'purchase',
			text: "Question 4 of 4:  Have you bought anything at Jack Daniel's before?",
			options: ['No', 'Yes'],
		},
	]

	const question = questions[step]

	return (
		<div className='text-center'>
			<h2 className='text-[24px]  leading-[28.8px] font-semibold mt-4 mb-6'>
				{question.text}
			</h2>
			<div className='space-y-2'>
				{question.options.map((option, idx) => (
					<button
						key={idx}
						className='w-full py-3 border-2 border-[#B9AC90] text-[#B9AC90] uppercase'
						onClick={() => onNext(question.id, option)}
					>
						{option}
					</button>
				))}
			</div>
		</div>
	)
}

export default Questions
