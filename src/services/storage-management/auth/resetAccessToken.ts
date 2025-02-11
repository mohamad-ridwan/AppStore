import * as Keychain from 'react-native-keychain';
import { authStorageServiceName } from '../../../utils/storage-management/storage-name';

export async function resetAccessToken(): Promise<void> {
    await Keychain.resetGenericPassword({
        service: authStorageServiceName
    });
}