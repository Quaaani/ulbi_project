import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Select, SelectOption } from 'shared/ui'

import { Currency } from '../../model'

export interface CurrencySelectProps {
  readonly?: boolean
  value?: Currency
  onChange?: (value: Currency) => void
}

const options: SelectOption[] = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.KZT, content: Currency.KZT },
  { value: Currency.KGS, content: Currency.KGS },
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { readonly, value, onChange } = props
  const { t } = useTranslation()

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency)
    },
    [onChange],
  )
  return (
    <Select
      data-testid="currencyselect.test"
      readonly={readonly}
      label={t('select-currency')}
      options={options}
      value={value}
      onChange={onChangeHandler}
    />
  )
})
