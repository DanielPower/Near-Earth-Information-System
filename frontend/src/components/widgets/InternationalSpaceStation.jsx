import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import useAxios from 'axios-hooks';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const InternationalSpaceStation = () => {
  const [center, setCenter] = useState({
    lat: 47.56395,
    lng: -52.80973,
  });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCfXH4F9uoMnCYRJqbKnELiHGJcQqK8lcA',
  });

  const [{ data: iss, loading, error }, refetchLocation] = useAxios(
    'https://api.wheretheiss.at/v1/satellites/25544',
  );

  useEffect(() => {
    if (iss) {
      setCenter({
        lat: iss.latitude,
        lng: iss.longitude,
      });
      setTimeout(() => refetchLocation(), 1000);
    }
  }, [iss]);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
      {iss && <Marker position={center} />}
    </GoogleMap>
  ) : (
    'loading'
  );
};

export default InternationalSpaceStation;
