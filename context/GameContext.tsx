'use client';

import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { GameResult, Question } from '../utils/gameLogic';
import { generateQuestions, saveGameResult } from '../utils/gameLogic';
import type { Flag } from '../data/flags';
import { allFlags } from '../data/allFlags';
import { geoguessrFlags } from '../data/geoguessrFlags';

interface GameContextType {
    gameMode: string | null;
    gameResult: GameResult | null;
    questions: Question[];
    currentQuestionIndex: number;
    isGameActive: boolean;
    startTime: number | null;
    resetGame: () => void;
    startGame: (mode: string) => void;
    answerQuestion: (answer: Flag) => void;
    goToNextQuestion: () => void;
    updateElapsedTime: (time: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

interface GameProviderProps {
    children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
    const [gameMode, setGameMode] = useState<string | null>(null);
    const [gameResult, setGameResult] = useState<GameResult | null>(null);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isGameActive, setIsGameActive] = useState(false);
    const [startTime, setStartTime] = useState<number | null>(null);
    const [questionsWithAnswers, setQuestionsWithAnswers] = useState<Array<{
        question: Question;
        userAnswer: Flag | null;
        isCorrect: boolean;
    }>>([]);

    const startGame = (mode: string) => {
        setGameMode(mode);
        setGameResult(null);
        setCurrentQuestionIndex(0);
        setIsGameActive(true);
        setStartTime(Date.now());
        setQuestionsWithAnswers([]);

        // ゲームモードに応じた問題生成
        let flags: Flag[] = [];
        let questionCount = 10;
        let isCodeQuiz = false;

        switch (mode) {
            case '10questions':
                flags = allFlags;
                questionCount = 10;
                break;
            case '20questions':
                flags = allFlags;
                questionCount = 20;
                break;
            case 'isoquiz':
                flags = allFlags;
                questionCount = 10;
                isCodeQuiz = true;
                break;
            case 'geoguessr':
                flags = geoguessrFlags;
                questionCount = 10;
                break;
            case 'allflags':
                flags = allFlags;
                questionCount = allFlags.length;
                break;
            default:
                flags = allFlags;
                questionCount = 10;
        }

        try {
            const generatedQuestions = generateQuestions(flags, questionCount, isCodeQuiz);
            setQuestions(generatedQuestions);
        } catch (error) {
            console.error('Failed to generate questions:', error);
            setIsGameActive(false);
        }
    };

    const resetGame = () => {
        setGameMode(null);
        setGameResult(null);
        setQuestions([]);
        setCurrentQuestionIndex(0);
        setIsGameActive(false);
        setStartTime(null);
        setQuestionsWithAnswers([]);
    };

    const answerQuestion = (answer: Flag) => {
        if (currentQuestionIndex >= questions.length) return;

        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = answer.code === currentQuestion.correctFlag.code;

        const newAnswer = {
            question: currentQuestion,
            userAnswer: answer,
            isCorrect: isCorrect
        };

        setQuestionsWithAnswers(prev => [...prev, newAnswer]);
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // ゲーム終了処理
            setIsGameActive(false);
            
            // 結果を計算
            const correctAnswers = questionsWithAnswers.filter(qa => qa.isCorrect).length;
            const incorrectAnswers = questionsWithAnswers.length - correctAnswers;
            const timeTaken = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;

            const gameResult: GameResult = {
                totalQuestions: questions.length,
                correctAnswers: correctAnswers,
                incorrectAnswers: incorrectAnswers,
                timeTaken: timeTaken,
                questionsWithAnswers: questionsWithAnswers,
                date: new Date()
            };

            // 結果を保存
            saveGameResult(gameResult);
            setGameResult(gameResult);
        }
    };

    const updateElapsedTime = (time: number) => {
        // 経過時間の更新処理
        console.log('Elapsed time:', time);
    };

    const value: GameContextType = {
        gameMode,
        gameResult,
        questions,
        currentQuestionIndex,
        isGameActive,
        startTime,
        resetGame,
        startGame,
        answerQuestion,
        goToNextQuestion,
        updateElapsedTime,
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};
