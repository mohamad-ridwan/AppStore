import * as Keychain from 'react-native-keychain';
import { authStorageServiceName, tokenStorageName } from '../../../utils/storage-management/storage-name';

export async function saveAccessToken(accessToken: string, refreshToken: string) {
    const data = JSON.stringify({
        accessToken,
        refreshToken
    })
    await Keychain.setGenericPassword(tokenStorageName, data, {
        service: authStorageServiceName,
        accessGroup: authStorageServiceName
    });
}