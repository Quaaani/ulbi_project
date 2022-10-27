import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/helpers'
import { Button, ButtonTheme } from 'shared/ui'
import TranslationIcon from 'shared/assets/icons/translation.svg'

import cls from './LanguageSwitcher.module.scss'

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
