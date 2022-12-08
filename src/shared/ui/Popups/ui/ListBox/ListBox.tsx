import { Listbox as HListBox } from '@headlessui/react'
import { Fragment, memo, ReactNode } from 'react'


import { Text, TextSize } from '../../../Text'
import { HStack } from '../../../Stack'
import { Icon } from '../../../Icon'
import ChevronDownIcon from '../../../../assets/icons/chevron-down.svg'
import ChevronUpIcon from '../../../../assets/icons/chevron-up.svg'
import NotAllowedIcon from '../../../../assets/icons/not-allowed.svg'
import OkCircleIcon from '../../../../assets/icons/ok-circle.svg'
import popupCls from '../../styles/Popup.module.scss'

import cls from './ListBox.module.scss'

import { DropdownDirection } from '@/shared/types'
import { classNames, Mods } from '@/shared/lib/helpers'

interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

export interface ListBoxProps {
  className?: string
  label?: string
  items: ListBoxItem[]
  value?: string
  defaultValue: string
  readonly?: boolean
  direction?: DropdownDirection
  onChange: (value: string) => void
}

export const ListBox = memo((props: ListBoxProps) => {
  const { className, label, items, value, defaultValue, readonly, direction = 'bottom-right', onChange } = props

  const DropdownIcon = direction.includes('bottom') ? ChevronDownIcon : ChevronUpIcon

  const mods: Mods = {
    [popupCls.readonly]: readonly,
  }
  return (
    <HStack gap="16">
      {label ? <Text title={label} size={TextSize.LARGE} /> : null}
      <HListBox as="div" disabled={readonly} className={classNames(popupCls.popup, mods, [className])} value={value} onChange={onChange}>
        <HListBox.Button disabled={readonly} className={cls.trigger}>
          <HStack justify="between" gap="32">
            <Text title={value ?? defaultValue} size={TextSize.LARGE} />
            <Icon icon={DropdownIcon} />
          </HStack>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, [popupCls[direction]])}>
          {items.map((item) => (
            <HListBox.Option key={item.value} as={Fragment} value={item.value} disabled={item.disabled}>
              {({ active, selected }) => (
                <HStack
                  role="listitem"
                  className={classNames(cls.listitem, { [popupCls.active]: active, [popupCls.disabled]: item.disabled })}
                  justify="between"
                  gap="32"
                >
                  <Text title={item.value} size={TextSize.MEDIUM} />
                  {selected ? <Icon icon={OkCircleIcon} /> : null}
                  {item.disabled ? <Icon icon={NotAllowedIcon} /> : null}
                </HStack>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
})
