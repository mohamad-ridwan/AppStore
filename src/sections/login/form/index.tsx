import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Input from '../../../components/input';
import Checkbox from '../../../components/checkbox';
import BasicButton from '../../../components/button';
import { useLogin } from '../../../hooks/useLogin';
import { THEME_COLOR } from '../../../config/theme/theme-color';

export default function LoginForm() {
    const {
        handleClickIcon,
        passwordActive,
        handleChangeInput,
        handleSubmit,
        errMsgInput,
        isDisableSubmit,
        loadingSubmit,
        isRememberMe,
        setIsRememberMe
    } = useLogin()

    return (
        <View style={styles.container}>
            <Input
                title='Username'
                placeholder='Username here'
                onChangeText={(value) => handleChangeInput('username', value)}
                desc={errMsgInput.username}
                descColor='red'
            />
            <Input
                title='Password'
                placeholder='Password here'
                icon={passwordActive ? 'eye' : 'eye-off'}
                handleClickIcon={handleClickIcon}
                secureTextEntry={!passwordActive}
                onChangeText={(value) => handleChangeInput('password', value)}
                desc={errMsgInput.password}
                descColor='red'
            />
            <View style={styles.forgotPwContainer}>
                <View style={styles.rememberMe}>
                    <Checkbox
                        isChecked={isRememberMe}
                        label='Remember me'
                        onPress={(isChecked) => setIsRememberMe(isChecked)}
                    />
                </View>
                <TouchableOpacity activeOpacity={0.8}>
                    <Text style={styles.forgotPw}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <BasicButton
                name='Sign In'
                borderRadius={50}
                onPress={handleSubmit}
                isDisabled={isDisableSubmit}
                isLoading={loadingSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    rememberMe: {
        width: '50%',
    },
    forgotPwContainer: {
        gap: 5,
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    forgotPw: {
        color: THEME_COLOR.SECONDARY_COLOR.darkGray,
        fontSize: 13,
        fontWeight: 500
    }
})