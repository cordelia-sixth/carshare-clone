import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import type { ReactNode } from 'react';

const libs: Libraries = ['places']; // 追加したい場合は drawing, geometry など

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // 必須
    libraries: libs,
  });

  if (loadError) return <p>Google Map の読み込みに失敗しました</p>;
  if (!isLoaded) return <p>Map Script Loading...</p>;

  return <>{children}</>;
};
