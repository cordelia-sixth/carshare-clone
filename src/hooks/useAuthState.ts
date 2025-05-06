import { getUser, LoginUser, subscribe } from '@/lib/authStore';
import { useEffect, useState } from 'react';

/**
 * 認証処理の結果を返すhooks
 * @returns 認証処理の状態 ログイン中のユーザー | null | undefined
 */
export const useAuthState = () => {
  // 現在のログイン状態
  const [user, setUser] = useState<LoginUser>(() => getUser());

  // const [authenticationg, setAuthenticating] = useState(true);

  // ログイン状態が変わったらその情報を取得
  useEffect(() => {
    // firebaseとコネクションが作られるので、このコンポーネントがアンマウントされた時に
    // そのコネクションを解除する関数が返される。
    const unsubscribe = subscribe(setUser);

    return () => unsubscribe();
  }, []);

  return user;
};
