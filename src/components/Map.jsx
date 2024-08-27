import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from 'react-leaflet';
import styles from './Map.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCities } from '../context/CitiesContext';
export function Map() {
    const [searchParams] = useSearchParams();
    const [mapPosition, setMapPosition] = useState([40, 0])

    const mapLat = searchParams.get('lat');
    const mapLng = searchParams.get('lng');

    useEffect(function() {
        if(mapLat & mapLng)setMapPosition([mapLat, mapLng])
    }, [mapLat, mapLng])

    const { cities } = useCities();


    return (<div className={styles.mapContainer}>
        <MapContainer className={styles.map} center={mapPosition} zoom={6} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            {cities.map(city =>
                <Marker position={[city.position?.lat, city.position?.lng]}>
                    <Popup>
                        <span>{city.emoji}</span>
                        <span>{city.cityName}</span>
                    </Popup>
                </Marker>)
            }
        <ChangeCenter position={mapPosition}/>
        <DetectClick/>
        </MapContainer>
    </div>)
}

function ChangeCenter({position = [40,0]}) {
    const map = useMap();
    if (position)
    map.setView(position)
    return null
}

function DetectClick() {
    const navigate = useNavigate();

    useMapEvent({
        click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    })
}