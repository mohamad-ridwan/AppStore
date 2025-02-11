import * as Keychain from 'react-native-keychain';
import { loginStorageName } from '../../../utils/storage-management/storage-name';
import { ReqLoginUserT } from '../../../types/store/auth/authAction';

export async function saveLoginForm(loginForm: ReqLoginUserT) {
    const data = JSON.stringify({
        storageName: 'login',
        data: loginForm
    })
    await Keychain.setGenericPassword(loginStorageName, data, {
        service: loginStorageName,
        accessGroup: loginStorageName
    });
}