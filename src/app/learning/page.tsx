"use client";

import React, { useState, useEffect } from "react";
import {
	Code,
	Database,
	Server,
	Bug,
	Trophy,
	Clock,
	CheckCircle,
} from "lucide-react";

const BackendDevGame = () => {
	const [currentLevel, setCurrentLevel] = useState(1);
	const [score, setScore] = useState(0);
	const [timeLeft, setTimeLeft] = useState(30);
	const [gameStarted, setGameStarted] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
	const [showResult, setShowResult] = useState(false);
	const [levelComplete, setLevelComplete] = useState(false);
	const [gameComplete, setGameComplete] = useState(false);

	const levels = [
		{
			name: "API Fundamentals",
			icon: <Code className="w-6 h-6" />,
			questions: [
				{
					question:
						"Which HTTP method should be used to retrieve data without side effects?",
					options: ["POST", "GET", "PUT", "DELETE"],
					correct: 1,
					explanation:
						"GET is idempotent and safe - it retrieves data without modifying server state.",
				},
				{
					question:
						"What HTTP status code indicates a successful resource creation?",
					options: ["200", "201", "204", "400"],
					correct: 1,
					explanation:
						"201 Created indicates that a new resource has been successfully created.",
				},
				{
					question:
						"In REST API design, what does the 'R' in CRUD correspond to?",
					options: ["POST", "GET", "PUT", "DELETE"],
					correct: 1,
					explanation:
						"READ operations in CRUD correspond to GET requests in REST APIs.",
				},
			],
		},
		{
			name: "Database Design",
			icon: <Database className="w-6 h-6" />,
			questions: [
				{
					question:
						"Which database relationship allows multiple records in both tables to relate to each other?",
					options: [
						"One-to-One",
						"One-to-Many",
						"Many-to-Many",
						"Self-Referencing",
					],
					correct: 2,
					explanation:
						"Many-to-Many relationships require a junction table to link multiple records from both sides.",
				},
				{
					question: "What is the primary purpose of database indexing?",
					options: [
						"Data backup",
						"Query performance",
						"Data encryption",
						"Schema validation",
					],
					correct: 1,
					explanation:
						"Indexes dramatically improve query performance by creating efficient data lookup structures.",
				},
				{
					question:
						"In SQL, which constraint ensures no duplicate values in a column?",
					options: ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "CHECK"],
					correct: 2,
					explanation:
						"UNIQUE constraint prevents duplicate values, while PRIMARY KEY implies both UNIQUE and NOT NULL.",
				},
			],
		},
		{
			name: "System Architecture",
			icon: <Server className="w-6 h-6" />,
			questions: [
				{
					question: "What is the main benefit of microservices architecture?",
					options: [
						"Faster development",
						"Independent scaling",
						"Simpler deployment",
						"Lower costs",
					],
					correct: 1,
					explanation:
						"Microservices allow each service to be scaled independently based on its specific load requirements.",
				},
				{
					question:
						"Which pattern is best for handling high-traffic read operations?",
					options: [
						"Load balancing",
						"Caching",
						"Database replication",
						"All of the above",
					],
					correct: 3,
					explanation:
						"All three patterns work together: caching reduces database load, replication distributes reads, and load balancing distributes traffic.",
				},
				{
					question: "What does CAP theorem state about distributed systems?",
					options: [
						"You can have all three: Consistency, Availability, Partition tolerance",
						"You can only guarantee two of the three properties",
						"Consistency is always most important",
						"Partition tolerance is optional",
					],
					correct: 1,
					explanation:
						"CAP theorem states you can only guarantee two out of three: Consistency, Availability, and Partition tolerance.",
				},
			],
		},
		{
			name: "Debugging & Performance",
			icon: <Bug className="w-6 h-6" />,
			questions: [
				{
					question:
						"What's the most effective way to identify performance bottlenecks?",
					options: [
						"Code review",
						"Profiling tools",
						"Load testing",
						"User feedback",
					],
					correct: 1,
					explanation:
						"Profiling tools provide detailed metrics about where your application spends time and resources.",
				},
				{
					question:
						"Which debugging technique is most useful for distributed systems?",
					options: [
						"Print statements",
						"Distributed tracing",
						"Unit tests",
						"Code comments",
					],
					correct: 1,
					explanation:
						"Distributed tracing tracks requests across multiple services, essential for debugging microservices.",
				},
				{
					question:
						"What's the primary cause of memory leaks in backend applications?",
					options: [
						"Too many variables",
						"Unreleased resources",
						"Large datasets",
						"Complex algorithms",
					],
					correct: 1,
					explanation:
						"Memory leaks typically occur when resources (connections, file handles, etc.) aren't properly released.",
				},
			],
		},
	];

	const currentLevelData = levels[currentLevel - 1];

	const handleAnswer = (answerIndex: number) => {
		setSelectedAnswer(answerIndex);
		setShowResult(true);

		const question = currentLevelData.questions[currentQuestion];
		const isCorrect = answerIndex === question.correct;

		if (isCorrect) {
			setScore(score + timeLeft * 10);
		}
	};

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (gameStarted && timeLeft > 0 && !showResult && !levelComplete) {
			timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
		} else if (timeLeft === 0 && !showResult) {
			handleAnswer(0);
		}
		return () => clearTimeout(timer);
	}, [timeLeft, gameStarted, showResult, levelComplete, handleAnswer]);

	const startGame = () => {
		setGameStarted(true);
		setTimeLeft(30);
		setCurrentQuestion(0);
		setSelectedAnswer(null);
		setShowResult(false);
		setLevelComplete(false);
	};

	const nextQuestion = () => {
		if (currentQuestion < currentLevelData.questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
			setSelectedAnswer(null);
			setShowResult(false);
			setTimeLeft(30);
		} else {
			setLevelComplete(true);
		}
	};

	const nextLevel = () => {
		if (currentLevel < levels.length) {
			setCurrentLevel(currentLevel + 1);
			setCurrentQuestion(0);
			setSelectedAnswer(null);
			setShowResult(false);
			setLevelComplete(false);
			setTimeLeft(30);
		} else {
			setGameComplete(true);
		}
	};

	const resetGame = () => {
		setCurrentLevel(1);
		setScore(0);
		setCurrentQuestion(0);
		setGameStarted(false);
		setSelectedAnswer(null);
		setShowResult(false);
		setLevelComplete(false);
		setGameComplete(false);
		setTimeLeft(30);
	};

	if (gameComplete) {
		return (
			<div className="max-w-4xl mx-auto p-6 bg-slate-950 min-h-screen text-lime-500">
				<div className="text-center">
					<Trophy className="w-24 h-24 text-lime-500 mx-auto mb-6" />
					<h1 className="text-4xl font-bold mb-4 text-lime-500">
						Congratulations!
					</h1>
					<p className="text-xl mb-6 ">
						You&apos;ve mastered Backend Development fundamentals!
					</p>
					<div className="bg-slate-500/10 rounded-lg p-6 mb-6">
						<p className="text-2xl font-bold text-lime-500">
							Final Score: {score.toLocaleString()}
						</p>
						<p className="text-lg mt-2 ">
							You&apos;ve completed all {levels.length} levels!
						</p>
					</div>
					<button
						onClick={resetGame}
						className="bg-lime-500 hover:bg-lime-500/90 text-slate-950 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
					>
						Play Again
					</button>
				</div>
			</div>
		);
	}

	if (!gameStarted) {
		return (
			<div className=" mx-auto p-6 bg-slate-950 min-h-screen text-lime-500">
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold mb-4">
						Backend Developer Challenge
					</h1>
					<p className="text-xl">
						Test your backend engineering skills across 4 key areas!
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6 mb-8">
					{levels.map((level, index) => (
						<div
							key={index}
							className="bg-lime-500/10 border border-lime-500/30 rounded-lg p-6"
						>
							<div className="flex items-center mb-3">
								<div className="bg-lime-500 text-slate-950 p-2 rounded-lg mr-3">
									{level.icon}
								</div>
								<h4 className="text-xl font-semibold ">{level.name}</h4>
							</div>
							<p className="text-lime-500/70">
								{level.questions.length} challenging questions
							</p>
						</div>
					))}
				</div>

				<div className="text-center">
					<div className="bg-slate-500/10 rounded-lg p-6 mb-6">
						<h2 className="text-xl font-semibold mb-3 ">How to Play:</h2>
						<ul className="text-left space-y-2">
							<li>• Answer questions quickly for bonus points</li>
							<li>• 30 seconds per question</li>
							<li>• Progress through 4 backend engineering topics</li>
							<li>• Learn from detailed explanations</li>
						</ul>
					</div>
					<button
						onClick={startGame}
						className="bg-lime-500 hover:bg-lime-500/90 text-slate-950 px-8 py-4 rounded-lg font-semibold text-xl transition-colors"
					>
						Start Challenge
					</button>
				</div>
			</div>
		);
	}

	if (levelComplete) {
		return (
			<div className="max-w-4xl mx-auto p-6 bg-slate-950 min-h-screen ">
				<div className="text-center">
					<CheckCircle className="w-16 h-16 text-lime-500 mx-auto mb-6" />
					<h2 className="text-3xl font-bold mb-4 ">Level Complete!</h2>
					<p className="text-xl mb-6 ">
						Great work on {currentLevelData.name}!
					</p>

					<div className="bg-slate-500/10 rounded-lg p-6 mb-6">
						<p className="text-2xl font-bold text-lime-500 mb-2">
							Current Score: {score.toLocaleString()}
						</p>
						<p className="text-lg ">
							Level {currentLevel} of {levels.length}
						</p>
					</div>

					{currentLevel < levels.length ? (
						<button
							onClick={nextLevel}
							className="bg-lime-500 hover:bg-lime-500/90 text-slate-950 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
						>
							Continue to {levels[currentLevel].name}
						</button>
					) : (
						<button
							onClick={nextLevel}
							className="bg-lime-500 hover:bg-lime-500/90 text-slate-950 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
						>
							View Final Results
						</button>
					)}
				</div>
			</div>
		);
	}

	const question = currentLevelData.questions[currentQuestion];

	return (
		<div className="mx-auto p-6 bg-slate-950 min-h-screen ">
			{/* Header */}
			<div className="flex justify-between items-center mb-8">
				<div className="flex items-center">
					<div className="text-lime-500 p-2 rounded-lg mr-3">
						{currentLevelData.icon}
					</div>
					<div>
						<h2 className="text-xl font-semibold text-lime-500">
							{currentLevelData.name}
						</h2>
						<p className="text-lime-500/70">
							Question {currentQuestion + 1} of{" "}
							{currentLevelData.questions.length}
						</p>
					</div>
				</div>
				<div className="text-right">
					<div className="flex items-center mb-1">
						<Clock className="w-4 h-4 mr-1 text-lime-500" />
						<span
							className={`font-bold ${
								timeLeft <= 10 ? "text-red-400" : "text-lime-500"
							}`}
						>
							{timeLeft}s
						</span>
					</div>
					<p className="text-lime-500 font-semibold">
						Score: {score.toLocaleString()}
					</p>
				</div>
			</div>

			{/* Progress Bar */}
			<div className="w-full bg-slate-500/20 rounded-full h-2 mb-8">
				<div
					className="bg-lime-500 h-2 rounded-full transition-all duration-300"
					style={{
						width: `${
							((currentQuestion + 1) / currentLevelData.questions.length) * 100
						}%`,
					}}
				></div>
			</div>

			{/* Question */}
			<div className="bg-slate-500/10 rounded-lg p-6 mb-6">
				<h3 className="text-xl font-semibold mb-6 ">{question.question}</h3>

				<div className="space-y-3">
					{question.options.map((option, index) => (
						<button
							key={index}
							onClick={() => !showResult && handleAnswer(index)}
							disabled={showResult}
							className={`w-full p-4 rounded-lg text-left transition-all ${
								showResult
									? index === question.correct
										? "bg-lime-500/20 border-2 border-lime-500 text-lime-500"
										: index === selectedAnswer && index !== question.correct
										? "bg-red-500/20 border-2 border-red-400 text-lime-500"
										: "bg-lime-500/5 text-lime-500/60"
									: "bg-lime-500/10 hover:bg-lime-500/20 border border-transparent hover:border-lime-500/50 text-lime-500"
							}`}
						>
							<span className="font-semibold mr-3 text-lime-500">
								{String.fromCharCode(65 + index)}.
							</span>
							{option}
						</button>
					))}
				</div>
			</div>

			{/* Result */}
			{showResult && (
				<div className="bg-lime-500/10 rounded-lg p-6 mb-6">
					<div
						className={`flex items-center mb-3 ${
							selectedAnswer === question.correct
								? "text-lime-500"
								: "text-red-400"
						}`}
					>
						<CheckCircle className="w-5 h-5 mr-2" />
						<span className="font-semibold">
							{selectedAnswer === question.correct ? "Correct!" : "Incorrect"}
						</span>
						{selectedAnswer === question.correct && (
							<span className="ml-2 text-lime-500">
								+{timeLeft * 10} points
							</span>
						)}
					</div>
					<p className="text-lime-500/80">{question.explanation}</p>

					<button
						onClick={nextQuestion}
						className="mt-4 bg-lime-500 hover:bg-lime-500/90 text-slate-950 px-6 py-2 rounded-lg font-semibold transition-colors"
					>
						{currentQuestion < currentLevelData.questions.length - 1
							? "Next Question"
							: "Complete Level"}
					</button>
				</div>
			)}
		</div>
	);
};

export default BackendDevGame;
