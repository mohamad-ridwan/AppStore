import * as Keychain from 'react-native-keychain';
import { loginStorageName } from '../../../utils/storage-management/storage-name';
import { ReqLoginUserT } from '../../../types/store/auth/authAction';

async function parseData(password: any): Promise<ReqLoginUserT | boolean> {
    try {
        const data = JSON.parse(password)?.data as ReqLoginUserT
        return data
    } catch (error) {
        return false
    }
}

export async function getLoginForm(): Promise<ReqLoginUserT | boolean> {
    const credentials = await Keychain.getGenericPassword({
        service: loginStorageName
    });
    if (!credentials) {
        return false
    } else if (credentials.username !== 'login') {
        return false
    }
    const data = await parseData(credentials.password) as ReqLoginUserT
    if (!data) {
        return false
    }
    return data
}