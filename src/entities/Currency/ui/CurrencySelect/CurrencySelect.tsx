import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox, Select, SelectOption } from 'shared/ui'

import { Currency } from '../../model'

export interface CurrencySelectProps {
  readonly?: boolean
  value?: Currency
  onChange?: (value: Currency) => void
}

const options: SelectOption<Currency>[] = [
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
    <ListBox
      label={t('select-currency')}
      value={value}
      defaultValue={t('select-currency')}
      items={options}
      readonly={readonly}
      onChange={onChangeHandler}
    />
  )
})
