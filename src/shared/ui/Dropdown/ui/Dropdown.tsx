import { Menu } from '@headlessui/react'
import { Fragment, memo, ReactNode } from 'react'
import { classNames } from 'shared/lib/helpers'
import { DropdownDirection } from 'shared/types'

import { Text, TextSize } from '../../Text'
import { AppLink } from '../../AppLink'

import cls from './Dropdown.module.scss'

interface DropdownItem {
  content: string
  disabled?: boolean
  onClick?: () => void
  href?: string
}

export interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropdownDirection
}

export const Dropdown = memo((props: DropdownProps) => {
  const { className, items, trigger, direction = 'bottom-right' } = props

  return (
    <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [cls[direction]])}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button type="button" className={classNames(cls.item, { [cls.active]: active }, [])} onClick={item.onClick}>
              <Text title={item.content} size={TextSize.MEDIUM} />
            </button>
          )

          if (item.href) {
            return (
              <Menu.Item key={item.content} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item key={item.content} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
})
