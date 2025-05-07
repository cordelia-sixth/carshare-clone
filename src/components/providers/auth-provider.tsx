import { fireAuth } from '@/lib/firebase-auth';
import { onAuthStateChanged, User } from 'firebase/auth';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type AuthContextValue = {
  user: User | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
});

// ページ全体用の遅延処理
// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthContextValue>({
    user: null,
    loading: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fireAuth, async (user) => {
      // await delay(1000);
      setState({ user, loading: false });
    });
    return () => unsubscribe(); // cleanup on unmount
  }, []);

  // ページ全体のローディングゲート
  if (state.loading) {
    return <p>Loading...</p>;
  }

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
