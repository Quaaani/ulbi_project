import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Select, SelectOption } from 'shared/ui'

import { Country } from '../../model'

export interface CountrySelectProps {
  readonly?: boolean
  value?: Country
  onChange?: (value: Country) => void
}

const options: SelectOption<Country>[] = [
  { value: Country.BEL, content: Country.BEL },
  { value: Country.KG, content: Country.KG },
  { value: Country.KZ, content: Country.KZ },
  { value: Country.RU, content: Country.RU },
]

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { readonly, value, onChange } = props
  const { t } = useTranslation()

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country)
    },
    [onChange],
  )
  return (
    <Select
      data-testid="countryselect.test"
      readonly={readonly}
      label={t('select-country')}
      options={options}
      value={value}
      onChange={onChangeHandler}
    />
  )
})
