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
        renderItem
    }
}