// NAVIGATION PROPS | ROUTE PROPS
import type {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
    Home: NavigatorScreenParams<HomeTabParamList>;
    PostDetails: { id: string };
    NotFound: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
    ProductsByCategory: undefined;
    ProductDetail: undefined
    Latest: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<HomeTabParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

// BOTTOM NAVIGATOR
export type TabBarT = {
    key: string
    name: string
    icon: string
    params: any
    colorIcon: string
}
