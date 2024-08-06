import { View, Text, FlatList, RefreshControl, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../../components/SearchInput";
import Trending from "../../../components/Trending";
import EmptyState from "../../../components/EmptyState";
import { getAllPosts, getLatestPosts } from "../../../lib/appwrite";
import VideoCard from "../../../components/VideoCard";
import useAppwrite from "../../../lib/useAppwrite";
import { images } from "../../../constants";
import { icons } from '../../../constants'
import { router, Link } from "expo-router";

import { useGlobalContext } from "../../../context/GlobalProvider";

const Home = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts} = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="mb-6 space-y-1">
            <View className="px-4 justify-between items-start flex-row mb-2">
              <View>
                <Text className="font-pmedium text-2xl text-pink mt-1.5">Reach</Text>
              </View>
              <SearchInput/>
              <TouchableOpacity 
                className="mt-2"
                onPress={()=>{router.push(`/profile`)}}
              >
                <Image
                  source={icons.profile}
                  className="w-5 h-6"
                  resizemode="contain"
                  tintColor={'#000000'}
                />
              </TouchableOpacity>
            </View>

            <View className="w-full h-8 justify-center">
              <View className="flex-row justify-between mx-[80px]">
                  <Link href="/public" className="text-lg font-semibold">Public</Link>
                  <Text className="text-lg font-semibold">Private</Text>
              </View>
              <Image 
                source={images.underLine}
                className="w-[180px] h-[2px] absolute -bottom-0 right-[20px]"
                resizeMode='contain'
              />
            </View>

            <View className="w-full h-[32px] justify-center bg-pink">
              <Text>tag</Text>
            </View>

            <View className="bg-pink w-full h-[62px] justify-center">
              <Text className="text-3xl">Ads</Text>
            </View>

            <View className="w-full flex-row px-3 justify-between items-center border-2 border-pink">
              <View className="mr-5">
                <Image
                    source={icons.leftArrowCircle}
                    className="w-[25px] h-[25px]"
                    resizemode="contain"
                  />
              </View>
              <Trending posts={latestPosts ?? []} />
              <View className="ml-5">
                <Image
                    source={icons.rightArrowCircle}
                    className="w-[25px] h-[25px]"
                    resizemode="contain"
                  />
              </View>
            </View>

            <View className="bg-pink w-full h-[130px] justify-center">
              <Text className="text-3xl">Category</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload the video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
