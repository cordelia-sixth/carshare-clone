import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = { width: '100%', height: '100%' };
const center = { lat: 36.238, lng: 137.971972 }; // 東京駅

export default function Map() {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={{
        disableDefaultUI: true,
        gestureHandling: 'auto',
        streetViewControl: false,
        zoomControl: true,
        clickableIcons: false,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
