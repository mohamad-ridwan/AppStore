import { useMemo, useState } from "react"
import { ReqLoginUserT } from "../types/store/auth/authAction"

export function useLogin() {
    const [form, setForm] = useState<ReqLoginUserT>({
        username: '',
        password: '',
        expiresInMin: 30
    })
    const [errMsgInput, setErrMsgInput] = useState<ReqLoginUserT>({
        username: ' ',
        password: ' '
    })
    const [passwordActive, setPasswordActive] = useState<boolean>(false)

    function handleClickIcon(): void {
        setPasswordActive(!passwordActive)
    }

    function handleChangeInput(name: 'username' | 'password', value: string): void {
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function formValidation(err: ReqLoginUserT): ReqLoginUserT {
        const { username, password } = form
        if (!username || !username.trim()) {
            err.username = 'username required'
        }
        if (!password || !password.trim()) {
            err.password = 'password required'
        }
        return err
    }

    function handleSubmit(): void {
        setErrMsgInput(formValidation({
            username: ' ',
            password: ' '
        }))
    }

    const isDisableSubmit = useMemo(() => {
        return Object.keys(formValidation({} as ReqLoginUserT))?.length !== 0
    }, [errMsgInput, form])

    return {
        handleClickIcon,
        passwordActive,
        handleChangeInput,
        handleSubmit,
        errMsgInput,
        isDisableSubmit
    }
}