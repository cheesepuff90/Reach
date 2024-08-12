import { View, Text, Animated, Dimensions, FlatList, ScrollView, RefreshControl, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef } from "react";
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

const { width } = Dimensions.get("window");

const Public = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { user, setUser, setIsLogged } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const [refreshing, setRefreshing] = useState(false);
  // const { data: latestPosts} = useAppwrite(getLatestPosts);
  const latestPosts = [
    {
      id: '1',
      title: 'Korea King Awesome',
      description: 'Lorem ipsum, Lorem ipsum',
      category: 'MBTI',
      university: 'University of Michigan',
      author: 'wso2000',
    },
    {
      id: '2',
      title: 'Situationship Problem',
      description: 'Lorem ipsum, Lorem ipsum',
      category: 'Relationship',
      university: 'Harvard University',
      author: 'johndoe',
    },
    {
      id: '3',
      title: 'Hate College',
      description: 'Lorem ipsum, Lorem ipsum',
      category: 'Relationship',
      university: 'Harvard University',
      author: 'johndoe',
    },
    {
      id: '4',
      title: 'GPA fucked up',
      description: 'Lorem ipsum, Lorem ipsum',
      category: 'Relationship',
      university: 'Harvard University',
      author: 'johndoe',
    },
  ];

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const handleLeftPress = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollViewRef.current.scrollTo({ x: newIndex * width, animated: true });
    }
  };

  const handleRightPress = () => {
    if (currentIndex < latestPosts.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollViewRef.current.scrollTo({ x: newIndex * width, animated: true });
    }
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
              <View className="flex-row justify-around">
                  <Text className="text-lg font-semibold">Public</Text>
                  <Link href="/private" className="text-lg font-semibold">Private</Link>
              </View>
              <Image 
                source={images.underLine}
                className="w-[180px] h-[2px] absolute -bottom-0 justify-around"
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

            <View className="py-5 px-8 justify-between flex-row bg-pink h-[149px]">
              <TouchableOpacity onPress={handleLeftPress}>
                <Image
                  source={icons.left}
                  className="mt-11"
                />
              </TouchableOpacity>

              <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                scrollEnabled={true} // Disable manual scrolling
                showsHorizontalScrollIndicator={true}
              >
                {latestPosts.map((post, index) => (
                  <View key={index} style={{ width: width-100, paddingHorizontal: 10 }}>
                    <View className="flex-col w-full">
                      <View className="flex-row">
                        <Image 
                          source={icons.olympic}
                          className="resize w-10 h-10"
                        />
                        <View>
                          <Text className="text-xs">
                   
                            {post.category}
                          </Text>
                          <Text className="text-xs">
                            {post.university} * {post.author}
                          </Text>
                        </View>
                      </View>

                      <View>
                        <Text className="font-medium text-[18px]">
                          {post.title}
                        </Text>
                        <Text>
                          {post.description}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>

              <TouchableOpacity onPress={handleRightPress}>
                <Image
                  source={icons.right}
                  className="mt-11"
                />
              </TouchableOpacity>
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

export default Public;