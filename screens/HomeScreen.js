import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slice/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 14,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType="search"
          placeholder="where you from?"
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{
            key: '',
            language: 'en',
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
