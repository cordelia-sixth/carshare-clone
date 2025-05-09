import { MapProvider } from '@/components/providers/map-provider';
import dynamic from 'next/dynamic';

export default function Search() {
  const Map = dynamic(() => import('@/components/google-map/map'), {
    ssr: false,
  });

  return (
    <MapProvider>
      <Map />
    </MapProvider>
  );
}
