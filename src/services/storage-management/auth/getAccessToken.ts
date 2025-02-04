import * as Keychain from 'react-native-keychain';
import { authStorageServiceName } from '../../../utils/storage-management/storage-name';
import { Token } from '../../../types/store/auth/authSlice';

async function parseData(password: any): Promise<Token | boolean> {
    try {
        const { accessToken, refreshToken } = JSON.parse(password) as Token
        return { accessToken, refreshToken }
    } catch (error) {
        return false
    }
}

export async function getAccessToken(): Promise<Token | boolean> {
    const credentials = await Keychain.getGenericPassword({
        service: authStorageServiceName
    });
    if (!credentials) {
        return false
    } else if (credentials.username !== 'token') {
        return false
    }
    const data = await parseData(credentials.password) as Token
    if (!data) {
        return false
    }
    return {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken
    }
}