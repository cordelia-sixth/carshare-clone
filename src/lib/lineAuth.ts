import { FirebaseError } from 'firebase/app';
import { OAuthProvider, signInWithPopup, type User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { fireAuth, firestore } from './firebase-auth';

const saveUserInfo = async (user: User) => {
  if (user) {
    try {
      // 'users' コレクションに uid をドキュメントIDとして保存
      const userRef = doc(firestore, 'users', user.uid);
      const userData = {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        loginMethod: 'line',
        isRegistered: false,
        createdAt: new Date(),
      };
      // ドキュメントが存在する場合はマージ（更新）、存在しない場合は新規作成
      await setDoc(userRef, userData, { merge: true });
      console.log('LINEユーザー情報をFirestoreに保存しました。', userData);
    } catch (error) {
      console.log('Firestoreへの保存エラー：', error);
    }
  }
};

/**
 * LINEログインを実行する関数
 */
export const lineAuth = async () => {
  try {
    const lineProvider = new OAuthProvider(
      process.env.NEXT_PUBLIC_PUBLIC_FIREBASE_OIDC_LINE as string,
    );
    const result = await signInWithPopup(fireAuth, lineProvider);
    await saveUserInfo(result.user);
    // console.log('ログイン成功', result);
    return { success: true, message: 'ログイン成功' };
  } catch (error) {
    if (error instanceof FirebaseError) {
      return { success: false, message: error.code };
    }
    // console.log('ログイン失敗', error.code);
  }
};
