export type ReqLoginUserT = {
    username: string
    password: string
    expiresInMin?: number
}

export type ReqRefreshTokenT = {
    refreshToken?: string
    expiresInMins?: number
}

export type ReqAuthUserT = {
    token: string
}