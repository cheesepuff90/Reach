import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";

import { icons } from "../constants";
import { usePathname, router } from "expo-router";

const SearchInput = () => {
  const pathname = usePathname()
  const [query, setQuery] = useState('')

  return (
      <View className="border-2 border-black w-48 h-10 px-2 bg-white-100 rounded-2xl focus:border-secondary items-center flex flex-row space-x-4">
        <TouchableOpacity
          onPress={() =>{
            if(!query) {
              return Alert.alert('Missing query', "Please input something to search results across database")
            }

            if(pathname.startsWith('/search')) router.setParams({query})
            else router.push(`/search/${query}`)
          }}
        >
            <Image 
                source = {icons.searchGray}
                className = 'w-[28px] h-[28px] mt-0.5'
                resizemode = 'contain'
            />
        </TouchableOpacity>

        <TextInput
          className="text-base text-black flex-1 font-pregular"
          value={query}
          placeholder="Search"
          placeholderTextColor="#828C8F"
          onChangeText={(e) => setQuery(e)}
        />
      </View>
  );
};

export default SearchInput;