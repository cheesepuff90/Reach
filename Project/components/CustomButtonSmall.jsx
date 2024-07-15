import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButtonSmall = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-white min-h-[20px] mt-20 flex flex-row justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}>
        <Text className={`text-pink text-sm ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButtonSmall