import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ReactNode } from 'react';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

type Props = {
    children: ReactNode
}

export default function TabNavigator({ children }: Props) {
    return (
        <Tab.Navigator
            tabBar={(props) => <TabBar {...props} />}
        >
            {children}
        </Tab.Navigator>
    );
}