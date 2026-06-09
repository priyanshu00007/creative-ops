import { createContext, useContext, useState, type ReactNode } from 'react';

interface CursorContextType {
  cursorVariant: string;
  setCursorVariant: (variant: string) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextType | null>(null);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant, cursorText, setCursorText }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) throw new Error('useCursor must be used within a CursorProvider');
  return context;
}
