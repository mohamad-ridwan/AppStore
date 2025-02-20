import { useCallback, useEffect, useRef } from "react";
import { Animated, BackHandler } from "react-native";
import { HomeDataT } from "../types/sections/home";
import Header from "../sections/home/header";
import SearchBar from "../components/search/SearchBar";
import Categories from "../sections/home/categories";
import { THEME_COLOR } from "../config/theme/theme-color";
import { useDispatch } from "react-redux";
import { getCartByUser } from "../store/cart/cartAction";
import ImageSwiper from "../components/image-swiper";
import ItemImageSwiper from "../components/image-swiper/ItemImageSwiper";
import { homeData } from "../assets/data/home";

const {
    data,
    bannerData
} = homeData

export function useHome() {
    const scrollY = useRef(new Animated.Value(0)).current;

    const dispatch = useDispatch() as any

    const backgroundColor = scrollY.interpolate({
        inputRange: [0, 50], // Adjust input range based on when you want opacity to change
        outputRange: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'], // From transparent to opaque
        extrapolate: 'clamp',
    });
    const borderColor = scrollY.interpolate({
        inputRange: [0, 50], // Adjust input range based on when you want opacity to change
        outputRange: ['rgba(241, 241, 241, 0)', THEME_COLOR.PRIMARY_COLOR.gray], // From transparent to opaque
        extrapolate: 'clamp',
    });

    // HANDLE (AUTH) WHEN BACK PRESS
    useEffect(() => {
        const backAction = () => {
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, [])

    // HANDLE FETCH CART DATA
    useEffect(() => {
        dispatch(getCartByUser(6))
    }, [])

    const renderItem = useCallback(({ item }: { item: HomeDataT }) => {
        if (item.sectionType === 'HEADER') {
            return (
                <Header
                    backgroundColor={backgroundColor}
                    borderColor={borderColor}
                />
            )
        } else if (item.sectionType === 'SEARCH') {
            return <SearchBar />
        } else if (item.sectionType === 'TOP-BANNER') {
            return (
                <ImageSwiper
                    data={bannerData}
                    renderItem={({ item }) => (
                        <ItemImageSwiper
                            uri={item.data.image}
                        />
                    )}
                />
            )
        } else if (item.sectionType === 'CATEGORIES') {
            return <Categories />
        }
        return null
    }, [])

    return {
        data,
        renderItem,
        bannerData,
        scrollY,
    }
}