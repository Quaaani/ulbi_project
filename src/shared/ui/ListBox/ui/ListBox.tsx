import { Fragment, memo, ReactNode, useState } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { classNames, Mods } from 'shared/lib/helpers'

import { Icon, Text, TextSize, HStack } from '../..'
import OkCircleIcon from '../../../assets/icons/ok-circle.svg'
import NotAllowedIcon from '../../../assets/icons/not-allowed.svg'
import ChevronDownIcon from '../../../assets/icons/chevron-down.svg'
import ChevronUpIcon from '../../../assets/icons/chevron-up.svg'

import cls from './ListBox.module.scss'

type DropdownDirection = 'top' | 'bottom'

export interface ListBoxItem {
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
  const { className, label, items, value, defaultValue, readonly, direction = 'bottom', onChange } = props

  const DropdownIcon = direction === 'bottom' ? ChevronDownIcon : ChevronUpIcon

  const mods: Mods = {
    [cls.readonly]: readonly,
  }
  return (
    <HStack gap="16">
      {label ? <Text title={label} size={TextSize.LARGE} /> : null}
      <HListBox
        as="div"
        disabled={readonly}
        className={classNames(cls.listBox, mods, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button disabled={readonly} className={cls.trigger}>
          <HStack justify="between" gap="32">
            <Text title={value ?? defaultValue} size={TextSize.LARGE} />
            <Icon icon={DropdownIcon} />
          </HStack>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, [cls[direction]])}>
          {items.map((item) => (
            <HListBox.Option key={item.value} as={Fragment} value={item.value} disabled={item.disabled}>
              {({ active, selected }) => (
                <HStack
                  role="listitem"
                  className={classNames(cls.listitem, { [cls.active]: active, [cls.disabled]: item.disabled })}
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
