import React, { useEffect, useState } from 'react';
import { Text, Button, View } from 'react-native';
import * as Location from 'expo-location';
import { COLORS } from '@/constants/stylesheet';

const LocationPrompt = () => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    getLocation(); // Request location when component mounts
  }, []);

  return (
    <View style={{
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 22,
        paddingVertical: 10
    }} >
      <Text style={{color: COLORS.white}}>YOur Location:</Text>
      {errorMsg && <Text>{errorMsg}</Text>}
      {location ? (
        <Text style={{color: COLORS.white}}>
          Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
        </Text>
      ) : (<Text style={{color: COLORS.white}}>Loading...</Text>)}
    </View>
  );
};

export default LocationPrompt;