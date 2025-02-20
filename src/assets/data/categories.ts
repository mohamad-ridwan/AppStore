import { HomeDataT } from "../../types/sections/home"

const categoriesScreenDataElement: HomeDataT[] = [
    {
        id: '1',
        sectionType: 'HEADER'
    },
    {
        id: '2',
        sectionType: 'CATEGORIES'
    },
]
// PRODUCTS BY CATEGORY SCREEN DATA ELEMENT
const productsByCSDataElement: HomeDataT[] = [
    {
        id: '1',
        sectionType: 'HEADER'
    },
    {
        id: '2',
        sectionType: 'CATEGORIES'
    },
    {
        id: '3',
        sectionType: 'LIST-PRODUCTS'
    },
]

export const categoriesData = {
    categoriesScreenDataElement,
    productsByCSDataElement
}