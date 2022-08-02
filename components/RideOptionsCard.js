import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';

import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slice/navSlice';

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const { navigate } = useNavigation();
  const timeInformation = useSelector(selectTravelTimeInformation);
  const [selected, setSelected] = useState(null);
  console.log(timeInformation);

  return (
    <SafeAreaView style={tw`flex-grow p-0 justify-start `}>
      <View style={tw`relative`}>
        <TouchableOpacity
          onPress={() => navigate('NavigateCard')}
          style={tw`absolute z-50 left-3 top-5`}
        >
          <Icon name="arrow-back-outline" type="ionicon" />
        </TouchableOpacity>
        <Text style={tw`text-center text-xl py-5`}>
          Select A ride{' '}
          {timeInformation && `- ${timeInformation?.distance.text}`}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-6 ${
              item.id === selected?.id ? 'bg-gray-400' : undefined
            }`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <View style={tw`mr-4 justify-start`}>
              <Text style={tw`text-lg font-semibold`}>{item.title}</Text>
              <Text>{timeInformation?.duration.text}</Text>
            </View>
            <Text style={tw`font-bold text-lg`}>
              {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'GBP',
              }).format(
                (timeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={tw` mb-2 py-4 mx-4 rounded-xl mt-2  ${
          !selected ? 'bg-gray-200' : 'bg-blue-400'
        }`}
      >
        <Text style={tw`text-white text-center`}>Chose {selected?.title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
