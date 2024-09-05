import { View, Text, Animated, StyleSheet, useWindowDimensions, Dimensions, FlatList, ScrollView, RefreshControl, Image, TouchableOpacity } from "react-native";
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
import { PageIndicator } from 'react-native-page-indicator';

import { useGlobalContext } from "../../../context/GlobalProvider";

const { width } = Dimensions.get("window");

const Public = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { user, setUser, setIsLogged } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const [refreshing, setRefreshing] = useState(false);
  // const { data: latestPosts} = useAppwrite(getLatestPosts);
  const scrollX = useRef(new Animated.Value(0)).current;
  // const { width, height } = useWindowDimensions();
  const animatedCurrent = Animated.divide(scrollX, width);

  
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

            <View className="justify-between flex-col bg-pink h-[149px]">
              <Animated.ScrollView 
                ref={scrollViewRef}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([{ nativeEvent: {contentOffset: {x: scrollX}}}],
                  {useNativeDriver: false,})}
                scrollEventThrottle={16}
              >
                {latestPosts.map((post, index) => (
                  <View key={index} className="flex justify-center items-center" style={{ width }}>
                    <View className="w-full items-center justify-center">
                      <View className="flex-row items-center justify-center">
                        <Image 
                          source={icons.olympic}
                          className="w-10 h-10"
                          resizeMode="contain"
                        />
                        <View className="ml-3">
                          <Text className="text-xs text-gray-500">
                            {post.category}
                          </Text>
                          <Text className="text-xs text-black">
                            {post.university} * {post.author}
                          </Text>
                        </View>
                      </View>

                      <View className="mt-3 items-center">
                        <Text className="text-lg font-bold">
                          {post.title}
                        </Text>
                        <Text className="text-sm text-gray-500">
                          {post.description}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </Animated.ScrollView>

              <View className="absolute left-5 right-5 bottom-12 items-center justify-center">
                <PageIndicator count={latestPosts.length} current={animatedCurrent} />
              </View>
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageIndicator: {
    left: 20,
    right: 20,
    bottom: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Public;