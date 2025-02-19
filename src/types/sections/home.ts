type HomeSectionT =
    'HEADER' |
    'SEARCH' |
    'TOP-BANNER' |
    'SWIPER' |
    'CATEGORIES' |
    'LIST-PRODUCTS'

export type HomeDataT = {
    id: string
    sectionType: HomeSectionT
}