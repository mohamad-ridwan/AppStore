import * as Keychain from 'react-native-keychain';
import { loginStorageName } from '../../../utils/storage-management/storage-name';

export async function resetLoginForm(): Promise<void> {
    await Keychain.resetGenericPassword({
        service: loginStorageName
    });
}