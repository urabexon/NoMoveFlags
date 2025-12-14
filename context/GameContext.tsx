import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';


interface GameContextType {
    gameMode: string | null;
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

