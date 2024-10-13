import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useNavigation } from 'expo-router';

const Welcome = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false});
    }, [navigation]);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       router.replace('/home');
//     }, 3000); // 3 seconds

//     return () => clearTimeout(timeout);
//   }, []);



  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <View className="flex-1 items-center justify-center">
        <Text className="text-5xl font-medium text-pink items-center">
            Welcome to
        </Text>
        <Text className="text-5xl font-medium text-pink mb-12 items-center">
            Reach Harry!
        </Text>

        <TouchableOpacity
          className="w-64 h-12 bg-pink rounded-full items-center justify-center shadow-lg mb-6"
          onPress={() => router.replace('/(home)/public')}
        >
          <Text className="text-lg font-semibold text-white">
            Click Here To Start
          </Text>
        </TouchableOpacity>

        <Text className="text-sm text-gray-500 mx-4">
          By continuing, you have read and agreed{'\n'} to our{' '}
          <Text className="text-blue-500 underline">Terms and Conditions</Text>,{' '}
          <Text className="text-blue-500 underline">Privacy{'\n'}statement</Text>, and{' '}
          <Text className="text-blue-500 underline">Rewards Terms &{'\n'}Conditions</Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
