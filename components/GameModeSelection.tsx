"use client";

import { useState } from "react";
import Link from "next/link";

type Mode = "10questions" | "allflags" | "isoquiz" | "geoguessr";

export default function GameModeSelection() {
  const [showHelp, setShowHelp] = useState(false);

  const handleStartGame = (mode: Mode) => {
    console.log(`Starting game with mode: ${mode}`);
    alert(`mode: ${mode}（あとでゲーム画面実装）`);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full max-w-xl rounded-2xl border bg-white p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            GeoGuessr向け国旗当てクイズ
          </h1>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            地理クイズゲーム「GeoGuessr」のための国旗当てクイズです。
            表示される国旗または国コードから正しい国または地域を選んでください。
          </p>
        </div>

        <div className="flex flex-col space-y-4 mb-8">
          <button
            onClick={() => handleStartGame("10questions")}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 rounded-lg transition-colors shadow-md"
          >
            国旗10問モード
          </button>

          <button
            onClick={() => handleStartGame("isoquiz")}
            className="bg-purple-600 hover:bg-purple-700 text-white text-lg py-4 rounded-lg transition-colors shadow-md"
          >
            ISOコード10問モード
          </button>

          <button
            onClick={() => handleStartGame("geoguessr")}
            className="bg-orange-600 hover:bg-orange-700 text-white text-lg py-4 rounded-lg transition-colors shadow-md"
          >
            GeoGuessr対応国10問モード
          </button>

          <button
            onClick={() => handleStartGame("allflags")}
            className="bg-gray-900 hover:bg-gray-800 text-white text-lg py-4 rounded-lg transition-colors shadow-md"
          >
            全国旗モード
          </button>

          <button
            onClick={() => alert("暗記モード（あとで実装）")}
            className="bg-green-600 hover:bg-green-700 text-white text-lg py-4 rounded-lg transition-colors shadow-md"
          >
            暗記モード
          </button>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="flex items-center justify-center w-full text-blue-600 hover:text-blue-800 font-medium"
          >
            {showHelp ? "ヘルプを閉じる" : "ヘルプを表示"}
          </button>

          {showHelp && (
            <div className="mt-4 text-gray-700 bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold text-lg mb-3">遊び方</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>ゲームモードを選択すると、クイズが始まります</li>
                <li>4つの選択肢から選びます</li>
                <li>結果や履歴はあとで追加できます</li>
              </ul>

              <div className="mt-6 text-sm text-gray-600">
                詳細は <Link className="text-blue-600 hover:underline" href="/about">About</Link> にまとめます。
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
