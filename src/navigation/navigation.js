import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/login";
import Home from "../screens/Home/home";

const Stack = createStackNavigator()

const ScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <ScreenNavigator />
        </NavigationContainer>
    )
}