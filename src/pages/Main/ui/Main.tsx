import { ErrorButton } from 'app/providers/ErrorBoundary'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TextSize } from 'shared/ui'

import cls from './Main.module.scss'

function Main() {
  const { t } = useTranslation('main')

  return (
    <div className={cls.main}>
      <Text size={TextSize.HEADER}>{t('Main page')}</Text>
      <ErrorButton />
    </div>
  )
}

export default Main
