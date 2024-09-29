import { Stack } from "expo-router";

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="public" options={{headerShown:false, animation:'none'}}/>
            <Stack.Screen name="private" options={{headerShown:false, animation:'none'}}/>
        </Stack>
    )
}

export default StackLayout