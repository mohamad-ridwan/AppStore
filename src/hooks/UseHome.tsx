import { useCallback, useEffect, useState } from "react";
import { BackHandler } from "react-native";
import { HomeDataT } from "../types/sections/home";
import Header from "../sections/home/Header";
import SearchBar from "../components/search/SearchBar";
import Banner from "../sections/home/Banner";
import Categories from "../sections/home/categories";

export function UseHome() {
    const [data, setData] = useState<HomeDataT[]>([
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
    ])

    const bannerData = [
        'https://laz-img-cdn.alicdn.com/images/ims-web/TB1LLFTsljTBKNjSZFuXXb0HFXa.jpg_1200x1200.jpg',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]

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

    const renderItem = useCallback(({ item }: { item: HomeDataT }) => {
        if (item.sectionType === 'HEADER') {
            return (
                <Header />
            )
        } else if (item.sectionType === 'SEARCH') {
            return <SearchBar />
        } else if (item.sectionType === 'TOP-BANNER') {
            return <Banner />
        } else if (item.sectionType === 'CATEGORIES') {
            return <Categories />
        }
        return null
    }, [])

    return {
        data,
        renderItem,
        bannerData
    }
}