import { GoogleMap, MarkerF } from '@react-google-maps/api';
import Image from 'next/image';
import Link from 'next/link';

const containerStyle = { width: '100%', height: '100%' };
const center = { lat: 35.6809591, lng: 139.7673068 };
const carData = [
  {
    id: 1,
    position: { lat: 35.6812, lng: 139.7671 },
    name: 'スズキ アルト',
    type: '有償譲渡',
    payment: 330,
    imageUrl: '/car.jpg',
    descriptionUrl: 'xxx',
  },
  {
    id: 2,
    position: { lat: 35.7101, lng: 139.8107 },
    name: 'ダイハツ タント',
    type: '共同使用',
    payment: 300,
    imageUrl: '/car.jpg',
    descriptionUrl: 'yyy',
  },
];

export default function Map() {
  return (
    <div className="relative">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          disableDefaultUI: true,
          gestureHandling: 'greedy',
          zoomControl: true,
          clickableIcons: false,
          keyboardShortcuts: false,
        }}
      >
        {carData.map((car) => (
          <MarkerF key={car.id} position={car.position} />
        ))}
        <div className="absolute bottom-2 left-1/2 z-10 flex gap-3">
          {carData.map((car) => (
            <div
              key={car.id}
              className="space-y-1 rounded-md bg-white p-2 text-center"
            >
              <div className="relative">
                <p className="absolute top-1 left-1 rounded-2xl bg-blue-500 px-2.5 py-1 text-xs font-bold text-white">
                  {car.type}
                </p>
                <Image src="/car.jpg" width={150} height={100} alt="car" />
                <p className="absolute right-1 bottom-1 rounded-md bg-white px-2 text-xs font-bold opacity-85">
                  30分 → ¥{car.payment}
                </p>
              </div>
              <h4 className="font-semibold">{car.name}</h4>
              <Link
                href="#"
                className="block rounded-md bg-blue-100 p-2 text-sm font-semibold text-blue-500"
              >
                詳細・予約
              </Link>
            </div>
          ))}
        </div>
      </GoogleMap>
    </div>
  );
}
