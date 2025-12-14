'use client';

import React from 'react';
import { GameProvider } from '../context/GameContext';

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <GameProvider>
            {children}
        </GameProvider>
    );
}