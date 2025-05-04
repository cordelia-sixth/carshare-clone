import { ComponentProps } from 'react';

type Props = {
  handleClick: () => void;
} & ComponentProps<'button'>;

/**
 * アプリケーションで使う共通ボタンコンポーネント
 * @param handleClick クリックイベントが発生した時に実行する関数
 * @param children ボタンの表示する文字列
 */
export const Button = ({ handleClick, children }: Props) => {
  return (
    <button
      onClick={handleClick}
      className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-xs font-semibold text-white"
    >
      {children}
    </button>
  );
};
