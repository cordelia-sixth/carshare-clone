import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
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
type AuthState = User | null | undefined;

const AuthContext = createContext<AuthState>(undefined);

// ──────────────────────────────────────────
// 2. Provider – アプリ全体で 1 回だけマウント
// ──────────────────────────────────────────
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthState>(undefined);

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, setUser);
    return unsub; // cleanup on unmount
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

// ──────────────────────────────────────────
// 3. カスタムフック – どこでも利用可
// ──────────────────────────────────────────
export const useAuth = () => useContext(AuthContext);
