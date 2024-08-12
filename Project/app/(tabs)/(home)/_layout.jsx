import { Stack } from "expo-router";

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="public" options={{headerShown:false}}/>
            <Stack.Screen name="private" options={{headerShown:false}}/>
        </Stack>
    )
}

export default StackLayout