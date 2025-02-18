type HomeSectionT =
    'HEADER' |
    'SEARCH' |
    'TOP-BANNER' |
    'CATEGORIES' |
    'LIST-PRODUCTS'

export type HomeDataT = {
    id: string
    sectionType: HomeSectionT
}