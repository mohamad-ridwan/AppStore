type HomeSectionT =
    'HEADER' |
    'SEARCH' |
    'TOP-BANNER' |
    'SWIPER' |
    'CATEGORIES' |
    'LIST-PRODUCTS' |
    'INFORMATION'

export type HomeDataT = {
    id: string
    sectionType: HomeSectionT
}