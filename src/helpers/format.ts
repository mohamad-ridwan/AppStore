import { CurrencyT } from "../types/helpers/format"

function formatterCurrency(
    currency: CurrencyT
): Intl.NumberFormat {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    })
    return formatter
}

export const formatHelper = {
    formatterCurrency,
}