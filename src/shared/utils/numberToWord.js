import { ToWords } from 'to-words';
import { NUMBER_LOCAL_CODE } from "../../constants/numberLocalCode"

const numberToWord = (localCode = NUMBER_LOCAL_CODE.INDIA_ENGLIST) => {
  try {
    const toWords = new ToWords({
      localeCode: localCode,
      converterOptions: {
        currency: true,
        ignoreDecimal: false,
        ignoreZeroCurrency: false,
        doNotAddOnly: false,
        currencyOptions: { // can be used to override defaults for the selected locale
          name: 'Rupee',
          plural: '',
          symbol: '₹',
          fractionalUnit: {
            name: 'Paisa',
            plural: 'Paise',
            symbol: '',
          },
        }
      }
    })

    return toWords
  } catch (error) {
    console.log("numberToWord Error: ", error);
  }

}

export {
  numberToWord
}