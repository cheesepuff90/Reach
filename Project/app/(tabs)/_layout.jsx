import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({icon,color,name,focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                // className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-extralight' : 'font-extralight'} text-xs`} style={{color:color}} numberOfLines={1}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#E39B9B',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle:{
                    backgroundColor: '#000000',
                    borderTopWidth: 25.24,
                    borderTopColor: "#000000",
                    height: 83,
                }
            }}>
            <Tabs.Screen 
                name="(home)"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                        icon={icons.home}
                        color={color}
                        name="Home"
                        focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen 
                name="collegeReview"
                options={{
                    title: "College Review",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                        icon={icons.search}
                        color={color}
                        name="Review"
                        focused={focused}
                        />
                    )
                }}
            />  
      
            <Tabs.Screen 
                name="create"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                        icon={icons.create}
                        // color={color}
                        focused={focused}
                        />
                    )
                }}
            />    

            <Tabs.Screen 
                name="bookmark"
                options={{
                    title: "Internship",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                        icon={icons.message}
                        color={color}
                        name="Internship"
                        focused={focused}
                        />
                    )
                }}
            />      

            <Tabs.Screen 
                name="profile"
                options={{
                    title: "Me",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                        icon={icons.profile}
                        color={color}
                        name="Me"
                        focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout