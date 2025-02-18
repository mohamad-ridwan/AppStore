import { useLinkBuilder } from "@react-navigation/native";
import { Text, PlatformPressable } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View } from "react-native";
import { TabBarT } from "../types/navigation";
import { THEME_COLOR } from "../config/theme/theme-color";
import { ThemeMode } from "../config/theme/theme-mode";

type Props = {
    state: any
    descriptors: any
    navigation: any
}

export default function TabBar({
    state,
    descriptors,
    navigation
}: Props) {
    const { buildHref } = useLinkBuilder();
    const { backgroundStyle } = ThemeMode()

    // HANDLE HIDE NAVIGATOR
    if (state.routeNames.find((item: any, index: number) =>
        (item === 'Login' && state.index === index)
    )) {
        return <></>
    }

    const currentData: TabBarT[] = state.routes.filter(
        (route: TabBarT) =>
            route.name === 'Home' ||
            route.name === 'Search' ||
            route.name === 'Favorite' ||
            route.name === 'Profile'
    )
    const tabBar = currentData.map((route, index) => {
        let icon = ''
        const isFocused = state.index === index
        if (route.name === 'Home') {
            icon = isFocused ? 'home-sharp' : 'home-outline'
        } else if (route.name === 'Search') {
            icon = isFocused ? 'search-circle' : 'search-outline'
        } else if (route.name === 'Favorite') {
            icon = isFocused ? 'heart-circle-sharp' : 'heart-outline'
        } else if (route.name === 'Profile') {
            icon = isFocused ? 'person' : 'person-outline'
        }
        return {
            ...route,
            icon,
            colorIcon: isFocused ? THEME_COLOR.PRIMARY_COLOR.green : THEME_COLOR.SECONDARY_COLOR.darkGray
        }
    })

    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: backgroundStyle.backgroundColor,
            borderTopWidth: 1,
            borderTopColor: THEME_COLOR.PRIMARY_COLOR.gray
        }}>
            {tabBar.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <PlatformPressable
                        key={index}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.container}
                    >
                        <Icon
                            name={route.icon}
                            color={route.colorIcon}
                            size={22}
                        />
                        <Text style={[
                            styles.btnName,
                            { color: route.colorIcon }
                        ]}>
                            {label}
                        </Text>
                    </PlatformPressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        paddingVertical: 5
    },
    btnName: {
        fontSize: 11
    }
})