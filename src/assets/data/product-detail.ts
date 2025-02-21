import { HomeDataT } from "../../types/sections/home"

const dataScreenElement: HomeDataT[] = [
    {
        id: '1',
        sectionType: 'HEADER'
    },
    {
        id: '2',
        sectionType: 'SWIPER'
    },
    {
        id: '3',
        sectionType: 'INFORMATION'
    }
]

const dataIcons: string[] = [
    'heart-outline',
    'bag-handle-outline',
]

export const productDetailData = {
    dataScreenElement,
    dataIcons
}