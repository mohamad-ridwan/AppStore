export type ReqRefreshTokenT = {
    refreshToken?: string
    expiresInMins?: number
}

export type ReqAuthUserT = {
    token: string
}