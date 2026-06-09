import { createContext, useContext, useState, type ReactNode } from 'react';

interface RouterContextType {
  currentPage: string;
  navigate: (page: string) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter must be used within a RouterProvider');
  return context;
}
