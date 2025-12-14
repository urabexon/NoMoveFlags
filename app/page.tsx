'use client';

import { useState } from "react";
import { useGameContext } from "@/context/GameContext";
import GameModeSelection from "@/components/GameModeSelection";
import QuizQuestion from "@/components/QuizQuestion";
import ResultScreen from "@/components/ResultScreen";
import MemorizationMode from "@/components/MemorizationMode";

export default function Home() {
  const { gameMode, isGameActive, gameResult } = useGameContext();
  const [showMemorizationMode, setShowMemorizationMode] = useState(false);

  // MemorizationModeを表示中
  if (showMemorizationMode) {
    return (
      <div className="w-full">
        <MemorizationMode onReturn={() => setShowMemorizationMode(false)} />
      </div>
    );
  }

  // ゲーム結果を表示
  if (gameResult) {
    return (
      <div className="w-full">
        <ResultScreen />
      </div>
    );
  }

  // ゲーム中（問題表示）
  if (gameMode && isGameActive) {
    return (
      <div className="w-full">
        <QuizQuestion />
      </div>
    );
  }

  // 初期状態（モード選択画面）
  return (
    <div className="w-full">
      <GameModeSelection onMemorizationMode={() => setShowMemorizationMode(true)} />
    </div>
  );
}
