import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './LanguageSwitcher.module.scss'

import { classNames } from '@/shared/lib/helpers'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import TranslationIcon from '@/shared/assets/icons/translation.svg'


interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
  const { className } = props

  const { i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <Button
      className={classNames(cls.languageSwitcher, {}, [className])}
      icon={TranslationIcon}
      iconStyle={cls.icon}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    />
  )
})
