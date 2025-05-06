import { useAuthState } from '@/hooks/useAuthState';
import { fireAuth } from '@/lib/firebase-auth';
import { lineAuth } from '@/lib/lineAuth';
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { Button } from './button';

export const AuthArea = () => {
  console.log('AuthAreaがレンダリングされました');

  const user = useAuthState();
  console.log('現在のuser', user);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleLogin = async () => {
    setIsAuthenticating(true); // 認証開始
    const result = await lineAuth(); // LINE認証ポップアップ等

    if (!result?.success) {
      console.log(result?.message);
    }

    setIsAuthenticating(false); // 完了（成功でも失敗でも）
  };

  // ログイン済みならログアウトボタン
  if (user) {
    return (
      <Button
        handleClick={() => {
          signOut(fireAuth);
        }}
      >
        ログアウト
      </Button>
    );
  }

  // それ以外（未ログイン時）はログインボタン
  return <Button handleClick={handleLogin}>ログイン</Button>;
};
