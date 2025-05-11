import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = { width: '100%', height: '100%' };
const center = { lat: 35.6809591, lng: 139.7673068 };

export default function Map() {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={{
        disableDefaultUI: true,
        gestureHandling: 'auto',
        zoomControl: true,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
