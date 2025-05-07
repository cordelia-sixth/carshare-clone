import { useAuthWithDelay } from '@/hooks/useAuthWithDelay';
import { fireAuth } from '@/lib/firebase-auth';
import { lineAuth } from '@/lib/lineAuth';
import { signOut } from 'firebase/auth';
import { Button } from './button';

export const AuthArea = () => {
  // const user = useAuthState();
  // const [isAuthenticating, setIsAuthenticating] = useState(false);

  const { user, loading } = useAuthWithDelay(1500);

  const handleLogin = async () => {
    // setIsAuthenticating(true); // 認証開始
    const result = await lineAuth(); // LINE認証ポップアップ等

    if (!result?.success) {
      console.log(result?.message);
    }

    // setIsAuthenticating(false); // 完了（成功でも失敗でも）
  };

  if (loading) return <p>Loading...</p>;

  // ログイン済みならログアウトボタン
  if (user) {
    return (
      <>
        <p>{user.displayName}</p>
        <Button
          handleClick={() => {
            signOut(fireAuth);
          }}
        >
          ログアウト
        </Button>
      </>
    );
  }

  // それ以外（未ログイン時）はログインボタン
  return <Button handleClick={handleLogin}>ログイン</Button>;
};
