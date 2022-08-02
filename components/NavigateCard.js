import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination } from '../slice/navSlice';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { GOOGLE_API_KEY } from '@env';
import NavFavorite from './NavFavorite';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
const NavigateCard = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50 `}>
      <Text style={tw`text-center py-4 text-xl`}>Good Morning Farhan</Text>
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

              navigate('RideOptionsCard');
            }}
            fetchDetails={true}
            minLength={2}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            query={{
              key: GOOGLE_API_KEY,
              language: 'en',
            }}
          />
          <NavFavorite destination={true} />
        </View>
      </View>
      <View style={tw`flex-row  justify-evenly py-4  mt-auto`}>
        <TouchableOpacity
          onPress={() => navigate('RideOptionsCard')}
          style={tw`flex-row items-center w-24 justify-between rounded-md bg-green-700 px-4 py-2`}
        >
          <Icon name="car-sport-outline" color="white" type="ionicon" />
          <Text>Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row items-center w-24 justify-between rounded-md bg-gray-400 px-4 py-2`}
        >
          <Icon name="fast-food-outline" color="black" type="ionicon" />
          <Text>Food</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
