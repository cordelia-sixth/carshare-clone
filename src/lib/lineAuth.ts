import { OAuthProvider, signInWithRedirect } from 'firebase/auth';
import { fireAuth } from './firebase-auth';

/**
 * LINE認証関数
 */
export const lineAuth = async () => {
  try {
    const lineProvider = new OAuthProvider(
      process.env.NEXT_PUBLIC_PUBLIC_FIREBASE_OIDC_LINE as string,
    );
    const result = await signInWithRedirect(fireAuth, lineProvider);
    console.log('ログイン成功', result);
  } catch (error) {
    console.log('ログイン失敗', error);
  }
};
