export type KeyImageSwiperT = {
    key: 'BASIC-SWIPER' | 'REGULAR-SWIPER'
}
export type BaseImageSwiperT = {
    image: string
};

export type ImageSwiperPropsT<T extends KeyImageSwiperT> = {
    data: T
};