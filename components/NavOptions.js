import { FlatList, Text, Image, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { select0rigin } from '../slice/navSlice';

const data = [
  {
    id: '123',
    title: 'Getaride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(select0rigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pt-4 pb-8 bg-gray-200 mr-4 w-40 mt-4`}
          disabled={!origin}
        >
          <View style={tw`${!origin ? 'opacity-20' : 'opacity-100'}`}>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: 'contain',
              }}
              source={{ uri: item.image }}
            />
            <Text style={tw`text-lg font-semibold mt-2`}>{item.title}</Text>
            <Icon
              style={tw`p-2 mt-4 rounded-full w-10 bg-black`}
              name="arrow-forward-outline"
              color="white"
              type="ionicon"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
