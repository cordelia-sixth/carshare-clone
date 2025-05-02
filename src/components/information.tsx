import { Info } from 'lucide-react';

type Props = {
  information: string;
};

/**
 * アプリケーション全体で使う共通のインフォメーション表示コンポーネント
 * @param information 説明
 */
export const Information = ({ information }: Props) => {
  return (
    <div className="flex gap-2 rounded-lg bg-blue-100 px-5 py-4">
      <Info className="mt-[-1px] text-blue-500" />
      <p>{information}</p>
    </div>
  );
};
