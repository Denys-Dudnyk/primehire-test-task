'use client'

import { useState } from 'react'
import QuestionScreen from './QuestionScreen'
import CheckingScreen from './CheckingScreen'
import GameScreen from './GameScreen'

export default function Main() {
	const [currentStep, setCurrentStep] = useState(0)
	const [answers, setAnswers] = useState({})
	const [stage, setStage] = useState('questions')
	const totalSteps = 4

	const handleNext = (question, answer) => {
		setAnswers({ ...answers, [question]: answer })
		if (currentStep + 1 >= totalSteps) {
			setStage('checking')
		} else {
			setCurrentStep(prev => Math.min(prev + 1, totalSteps))
		}
	}

	return (
		<main
			className={`flex flex-col items-center justify-center ${
				stage === 'questions' ? 'p-4' : ''
			} ${stage === 'checking' ? 'mt-[120px] p-0 ' : ''} ${
				stage === 'game' ? 'p-0' : ''
			}`}
		>
			{stage === 'questions' && (
				<QuestionScreen
					currentStep={currentStep}
					totalSteps={totalSteps}
					handleNext={handleNext}
				/>
			)}
			{stage === 'checking' && (
				<CheckingScreen onComplete={() => setStage('game')} />
			)}
			{stage === 'game' && <GameScreen />}
		</main>
	)
}
