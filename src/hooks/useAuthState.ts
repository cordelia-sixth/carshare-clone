import { fireAuth } from '@/lib/firebase-auth';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

/**
 * 認証処理の結果を返すhooks
 * @returns 認証処理の状態 ログイン中のユーザー | null | undefined
 */
export const useAuthState = () => {
  // ログイン状態
  const [user, setUser] = useState<User | null | undefined>(undefined); // undefined: 初期読み込み中

  // ログイン状態が変わったらその情報を取得
  useEffect(() => {
    // firebaseとコネクションが作られるので、このコンポーネントがアンマウントされた時に
    // そのコネクションを解除する関数が返される。
    const unsubscribe = onAuthStateChanged(fireAuth, (firebaseUser) => {
      //
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  return user;
};
