import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
const MapScreen = () => {
  const { navigate } = useNavigation();
  const Stack = createStackNavigator();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigate('Homescreen')}
        style={tw`absolute top-8 z-50 mb-2 py-4 mx-4`}
      >
        <Icon
          style={tw`mr-4 rounded-xl bg-gray-200 p-2`}
          name="home"
          type="ionicon"
        />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
