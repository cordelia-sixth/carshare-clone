import { fireAuth } from '@/lib/firebase-auth';
import { onAuthStateChanged, User } from 'firebase/auth';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

// ──────────────────────────────────────────
// 1. Context 型: undefined = 初期読み込み中
// ──────────────────────────────────────────
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

// ──────────────────────────────────────────
// 2. Provider – アプリ全体で 1 回だけマウント
// ──────────────────────────────────────────
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

// ──────────────────────────────────────────
// 3. カスタムフック – どこでも利用可
// ──────────────────────────────────────────
export const useAuth = () => useContext(AuthContext);
