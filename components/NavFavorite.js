import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slice/navSlice';
const data = [
  {
    id: '644',
    icon: 'home',
    name: 'Tabing Banda Gadang',
    location: 'Home',
    destination: { lat: -0.9113585999999998, lng: 100.3727002 },
  },
  {
    id: '322',
    icon: 'logo-google',
    name: 'Tokopedia Tower Ciputra ',
    location: 'Work',
    destination: { lat: -6.221285299999999, lng: 106.8194558 },
  },
];
const NavFavorite = ({ destination }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  return (
    <FlatList
      style={tw`mt-4 `}
      data={data}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-400`, { height: 0.5 }]} />
      )}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={(data, details = null) => {
            if (!destination) {
              dispatch(
                setOrigin({
                  location: item.destination,
                  description: item.name,
                })
              );
              dispatch(setDestination(null));
              navigate('MapScreen');
            } else {
              dispatch(
                setDestination({
                  location: item.destination,
                  description: item.name,
                })
              );
            }
          }}
          style={tw`flex-row p-5 items-center `}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-2`}
            name={item.icon}
            type="ionicon"
          />
          <View>
            <Text style={tw`font-bold `}>{item.location}</Text>
            <Text style={tw`text-xs text-gray-400`}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorite;

const styles = StyleSheet.create({});
