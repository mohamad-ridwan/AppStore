import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ReactNode } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

type Props = {
    children: ReactNode
}

export default function TabNavigator({ children }: Props) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = 'home-sharp'

                    if (route.name === 'Home') {
                        iconName = focused ? 'home-sharp' : 'home-outline';
                    } else if (route.name === 'Login') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            {children}
        </Tab.Navigator>
    );
}