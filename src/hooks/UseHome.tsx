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
import { BaseImageSwiperT, ImageSwiperPropsT } from "../types/components/image-swiper";

const data: HomeDataT[] = [
    {
        id: '1',
        sectionType: 'HEADER'
    },
    {
        id: '2',
        sectionType: 'SEARCH'
    },
    {
        id: '3',
        sectionType: 'TOP-BANNER'
    },
    {
        id: '4',
        sectionType: 'CATEGORIES'
    },
]

const bannerData: ImageSwiperPropsT<BaseImageSwiperT>[] = [
    {
        data: {
            image: 'https://laz-img-cdn.alicdn.com/images/ims-web/TB1LLFTsljTBKNjSZFuXXb0HFXa.jpg_1200x1200.jpg'
        }
    },
    {
        data: {
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    },
    {
        data: {
            image: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    },
    {
        data: {
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    },
    {
        data: {
            image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    }
]

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