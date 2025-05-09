import { useAuthWithDelay } from '@/hooks/useAuthWithDelay';
import { Information } from '../information';

export const Main = () => {
  const { user, loading } = useAuthWithDelay(1000);

  if (loading) return <p>Loading...</p>;

  if (!user)
    return (
      <>
        <p>CAR-SHAREへようこそ！</p>
        <p>
          まずは画面右上の「地図から探す」を押して、付近のステーションを探してみてください！
        </p>
        <Information information="ご利用にはユーザー登録が必要になります。" />
      </>
    );

  if (!user.isRegistered)
    return <Information information="ユーザー登録が完了していません。" />;
};
