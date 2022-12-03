import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox, SelectOption } from 'shared/ui'

import { Country } from '../../model/consts/consts'

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
    <ListBox
      label={t('select-country')}
      value={value}
      defaultValue={t('select-country')}
      items={options}
      readonly={readonly}
      onChange={onChangeHandler}
    />
  )
})
