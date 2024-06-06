import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import SettingsScreen from '../settings/SettingsScreen';
import ProfileScreen from '../profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNav = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );

}

export default BottomNav
