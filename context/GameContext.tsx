'use client';

import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { GameResult, Question } from '../utils/gameLogic';
import type { Flag } from '../data/flags';

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

    const startGame = (mode: string) => {
        setGameMode(mode);
        setGameResult(null);
        setCurrentQuestionIndex(0);
        setIsGameActive(true);
        setStartTime(Date.now());
    };

    const resetGame = () => {
        setGameMode(null);
        setGameResult(null);
        setQuestions([]);
        setCurrentQuestionIndex(0);
        setIsGameActive(false);
        setStartTime(null);
    };

    const answerQuestion = (answer: Flag) => {
        // ゲームロジックの実装が必要
        console.log('Answer:', answer);
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsGameActive(false);
            // ゲーム終了処理
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
