import { GoogleMap, MarkerF } from '@react-google-maps/api';
import Image from 'next/image';
import Link from 'next/link';

const containerStyle = { width: '100%', height: '100%' };
// TODO:carDataの先頭の座標を取得するようにする
const center = { lat: 35.6812, lng: 139.7671 };
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
  {
    id: 3,
    position: { lat: 35.6852, lng: 139.7528 },
    name: 'ダイハツ タント',
    type: '共同使用',
    payment: 300,
    imageUrl: '/car.jpg',
    descriptionUrl: 'yyy',
  },
  {
    id: 4,
    position: { lat: 35.684, lng: 139.7747 },
    name: 'ダイハツ タント',
    type: '共同使用',
    payment: 300,
    imageUrl: '/car.jpg',
    descriptionUrl: 'yyy',
  },
  {
    id: 5,
    position: { lat: 35.6987, lng: 139.7731 },
    name: 'ダイハツ タント',
    type: '共同使用',
    payment: 300,
    imageUrl: '/car.jpg',
    descriptionUrl: 'yyy',
  },
  {
    id: 6,
    position: { lat: 35.6717, lng: 139.7649 },
    name: 'ダイハツ タント',
    type: '共同使用',
    payment: 300,
    imageUrl: '/car.jpg',
    descriptionUrl: 'yyy',
  },
  {
    id: 7,
    position: { lat: 35.6801, lng: 139.7629 },
    name: 'ダイハツ タント',
    type: '共同使用',
    payment: 300,
    imageUrl: '/car.jpg',
    descriptionUrl: 'yyy',
  },
  {
    id: 8,
    position: { lat: 35.6754, lng: 139.7632 },
    name: 'ダイハツ タント',
    type: '共同使用',
    payment: 300,
    imageUrl: '/car.jpg',
    descriptionUrl: 'yyy',
  },
  {
    id: 9,
    position: { lat: 35.6856, lng: 139.7628 },
    name: 'ダイハツ タント',
    type: '共同使用',
    payment: 300,
    imageUrl: '/car.jpg',
    descriptionUrl: 'yyy',
  },
  {
    id: 10,
    position: { lat: 35.7101, lng: 139.8178 },
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
        zoom={14}
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
        <div className="absolute bottom-2 left-14 flex w-[88%] gap-4 overflow-x-auto">
          {carData.map((car) => (
            <div
              key={car.id}
              className="shrink-0 space-y-1 rounded-md bg-white p-2 text-center"
            >
              <div className="relative">
                <p className="absolute top-1 left-1 rounded-2xl bg-blue-500 px-2.5 py-1 text-xs font-bold text-white">
                  {car.type}
                </p>
                <Image src="/car.jpg" width={140} height={80} alt="car" />
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
