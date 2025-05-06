/**
 * ログイン状態をアプリ内で保持（オンメモリ）・共有するシングルトンモジュール
 */
import { User } from 'firebase/auth';

// ログインユーザー型
export type LoginUser = User | null | undefined;

/**
 * ログイン状態が変わった時に実行される関数（今回はuseStateのsetUser関数）の型
 * setUser関数は引数にユーザー状態を受け取り、stateを更新する
 * nullはログインしていない（初期状態）。userはログインしている（ユーザー情報）
 */
type Listener = (user: LoginUser) => void;

// アプリ内で共有される現在のユーザー情報
// nullはログインしていない（初期状態）
let currentUser: LoginUser = null;

// Set<Listeners> はsetUser()を複数保持する集合体
// つまりlistenersはsetUser()をいくつも持つ
// そしてログイン状態が変わった時に、すべてのsetUser()を実行するためにこうしている。
// setUser()が実行されるということは、stateが更新されるので再レンダリングされるということ
const listeners = new Set<Listener>();

// authStoreの持つログイン状態currentUserを更新する関数
// つまりonAuthChangedが実行されたらこの関数も実行されて
// authStoreが保持するログイン状態を更新する（currentUserが更新される）
// さらにログイン状態が必要なコンポーネントに通知される（そのコンポーネントのstateが更新される）
export const updateUser = (user: LoginUser) => {
  // 現在のログイン状態を更新
  currentUser = user;

  // 購読している全てのコンポーネントにも現在のログイン状態を送る
  // こうするとそのコンポーネントも再レンダリングされる
  listeners.forEach((listener) => listener(user));
};

// authStoreが持つ現在のログイン状態を返す関数
export const getUser = () => currentUser;

// ログイン状態が必要なコンポーネントのstate更新関数をlistenerとして登録する関数
// この関数はuseEffectで実行する
// 引数のlistenerとは、state更新関数である(user) => voidのこと
// state更新関数を登録する、ということはコンポーネントの制御を持たせることになる
export const subscribe = (listener: Listener) => {
  listeners.add(listener);
  listener(currentUser); // 初期通知

  // コンポーネントがアンマウントされた時にlistener（state更新関数）を削除する処理
  // 使う側はunsubscribe関数として受け取る。
  // これがないとlistener（コンポーネント）がSetに溜まり続けてしまう。
  return () => {
    listeners.delete(listener);
  };
};
