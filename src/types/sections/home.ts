type HomeSectionT = 'HEADER' | 'SEARCH' | 'TOP-BANNER' | 'CATEGORIES'

export type CategoryNamesT =
    'all' |
    'smartphone' |
    'headphones' |
    'laptop' |
    'playstation'

export type PickDataCategoriesT = {
    id: string
    name: string
    type: CategoryNamesT
}

export type HomeDataT = {
    id: string
    sectionType: HomeSectionT
}