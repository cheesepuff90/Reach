import { View, Text, TextInput, FlatList, TouchableOpacity, Image, Touchable } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'
import SearchInput from "../../components/SearchInput";
import { icons, images } from "../../constants";
import { router } from "expo-router";

const CollegeReview = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        ListHeaderComponent={() => (
          <View className="mb-6 space-y-1">
            <View className="px-4 justify-between items-start flex-row mb-2">
              <View>
                <Text className="font-bold text-3xl text-black mt-1.5">Reach</Text>
              </View>
              <TouchableOpacity
                className="mt-2"
                onPress={() => { router.push(`/profile`) }}
              >
                <Image
                  source={icons.profile}
                  className="w-5 h-6"
                  resizemode="contain"
                />
              </TouchableOpacity>
            </View>

            <View className="items-center flex-column mb-2 w-full">
              <Text className="font-psemibold mt-10 text-base">
                Review College that you are interested
              </Text>
              <Text className="font-psemibold text-base">
                Get informations from actual college students
              </Text>
            </View>

            <View className="px-4 justify-center flex-row mb-10">
              <SearchInput />
            </View>

            <View className="py-10 px-10 justify-between flex-row bg-pink h-[149px]">
              <View className="flex-col">
                <View className="border-2 border-black rounded-2xl items-center">
                  <Text className="font-xxs">Unviersity of Michigan</Text>
                </View>
                <Text className="text-xl font-pmedium">
                  Review
                </Text>
                <Text className="text-xl font-pmedium">
                  my college
                </Text>
                <TouchableOpacity
                  className="w-13 h-6 py-1 bg-black rounded-2xl items-center"
                  onPress={() => { router.push(`/create`) }}
                >
                  <Text className="text-white font-bold">Write Review</Text>
                </TouchableOpacity>
              </View>
              <Image
                source={icons.profile}
                className="mt-37 w-111 h-111"
              />
            </View>

            <View
              className="px-10 py-10 items-center flex flex-col"
            >
              <Text
                className="text-[36px] font-psemibold"
              >
                Popular University
              </Text>
              <View
                className="flex flex-wrap flex-row justify-around gap-4 mt-4"
              >
                {[...Array(6)].map((_, index) => (
                  <View
                    key={index}
                    className="border-2 border-black rounded-2xl flex items-center p-2 w-[45%] flex-cols"
                  >
                    <View className="flex-row mt-1">
                      <Image
                        source={images.michigan}
                        className="w-3 h-3 flex-none resize ml-1"
                      />
                      <Text
                        className="text-[11px] ml-1 font-psemibold"
                      >
                        University of Michigan
                      </Text>
                    </View>
                    <View
                      className="flex-row gap-1"
                    >
                      <TouchableOpacity
                        className="w-auto h-6 py-0.5 items-center"
                        onPress={() => { router.push(`/home`) }}
                      >
                        <Text
                          className="text-[11px] font-pregular underline"
                        >
                          Review
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        className="w-auto h-6 py-0.5 items-center"
                        onPress={() => { router.push(`/home`) }}
                      >
                        <Text
                          className="text-[11px] font-pregular underline"
                        >
                          Post
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        className="w-auto h-6 py-0.5 items-center"
                        onPress={() => { router.push(`/home`) }}
                      >
                        <Text
                          className="text-[11px] font-pregular underline"
                        >
                          Masters
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        className="w-auto h-6 py-0.5 items-center"
                        onPress={() => { router.push(`/home`) }}
                      >
                        <Text
                          className="text-[11px] font-pregular underline"
                        >
                          PhD
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default CollegeReview