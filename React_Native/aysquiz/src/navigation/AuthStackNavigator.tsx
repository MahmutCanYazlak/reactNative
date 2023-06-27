import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/LoginScreen';
import { Route } from './route';
const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="AuthStackNavigator"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={Route.login} component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default AuthStackNavigator;