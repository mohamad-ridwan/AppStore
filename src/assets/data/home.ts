import { BaseImageSwiperT, ImageSwiperPropsT } from "../../types/components/image-swiper"
import { HomeDataT } from "../../types/sections/home"

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

export const homeData = {
    data,
    bannerData
}