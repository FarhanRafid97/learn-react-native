import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination } from '../slice/navSlice';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50 `}>
      <Text style={tw`text-center pt-4 text-xl`}>NavigateCard</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={{
              container: {
                flex: 0,
                paddingTop: 20,
              },
              textInput: {
                padding: 15,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: 'gray',
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate('RideOptionsCard');
            }}
            fetchDetails={true}
            minLength={2}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            query={{
              key: '',
              language: 'en',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
