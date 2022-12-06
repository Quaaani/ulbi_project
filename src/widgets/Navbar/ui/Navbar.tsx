import { NotificationButton } from 'features/NotificationButton'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/helpers'
import { HStack } from 'shared/ui/Stack'
import { Text, TextColor, TextSize } from 'shared/ui/Text'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Login } from 'widgets/Login'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

// Компоненты, которые не нужно помещать в отдельные чанки через lazy load
// имеют именованный экспорт
export const Navbar = memo((props: NavbarProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <HStack className={classNames(cls.navbar, {}, [className])} justify="between">
      <Text title={t('ulbi-course-app')} size={TextSize.HEADER} color={TextColor.INVERTED} />
      <HStack>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <NotificationButton />
        <Login />
      </HStack>
    </HStack>
  )
})
