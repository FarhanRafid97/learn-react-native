import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { select0rigin, selectDestination } from '../slice/navSlice';
import MapViewDirections from 'react-native-maps-directions';
const Map = () => {
  const origin = useSelector(select0rigin);
  const destination = useSelector(selectDestination);

  const mapRef = useRef(null);
  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);
  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="standard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          destination={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          apikey=""
          strokeWidth={3}
          strokeColor="hotpink"
        />
      )}

      <Marker
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
        title="Origin"
        description={origin.description}
        identifier="origin"
      />
      <Marker
        coordinate={{
          latitude: destination.location.lat,
          longitude: destination.location.lng,
        }}
        title="Destination"
        description={destination.description}
        identifier="destination"
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
