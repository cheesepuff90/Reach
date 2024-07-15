import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import React from 'react';

import { icons } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import { getUserPosts, signOut } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import InfoBox from "../../components/InfoBox";
import EmptyState from "../../components/EmptyState";
import VideoCard from "../../components/VideoCard";
import CustomButtonSmall from "../../components/CustomButtonSmall";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/sign-in");
  };
 
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item}/>
        )}

        ListHeaderComponent={() => (
          <View className="w-full flex items-center justify-center mt-6 mb-12 px-4">
            <TouchableOpacity
              className="flex w-full items-end mb-10"
              onPress={logout}
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <CustomButtonSmall
            title = "Edit Profile"
            //handlePress={submit} Not yet implemented need to change
            containerStyles="mt-7"
            //isLoading={isSubmitting} No submit here but need to edit profile
            />

            <View className="w-16 h-16 mt-5 border border-secondary rounded-lg justify-center items-center">
              <Image 
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <CustomButtonSmall
            title = "Change Profile Photo"
            //handlePress={submit} Not sure what to do with handlepress
            containerStyles="mt-7"
            //isLoading={isSubmitting} No submit here but need to change photo
            />

            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            {/* <View className="mt-5 flex flex-row">
              <InfoBox
                title={posts.length || 0} 
                subtitle="Posts"
                containerStyles="mr-10"
                titleStyles="text-xl"
              />
              <InfoBox
                title="1.2k"
                subtitle="Followers"
                titleStyles="text-xl"
              />
            </View> */}

            <View className = "flex w-full items-start mt-10" >
              
              <Text className="text-xl text-left mt-10 text-gray">Username</Text>

              <Text className="text-xl text-left mt-10 text-gray">Bio</Text>

              <Text className="text-xl text-left mt-10 text-gray">Add Links</Text> 

              <Text className="text-xl text-left text-semibold mt-10 font-psemibold text-gray">Profile</Text>

              <Text className="text-xl text-left mt-10 text-gray">School</Text>

              <Text className="text-xl text-left mt-10 text-gray">Major</Text>

              <Text className="text-xl text-left mt-10 text-gray">Contact Options</Text>

              <Text className="text-xl text-left mt-10 text-gray">Profile Display</Text>

              <Text className="text-xl text-left mt-10 text-pink">Create Avatar</Text>

              <Text className="text-xl text-left mt-10 text-pink">Personal Information Settings</Text>

            </View>

          </View>

        )}

        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found" 
            subtitle="No videos found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;