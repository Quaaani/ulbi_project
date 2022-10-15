import { ErrorButton } from 'app/providers/ErrorBoundary'
import React from 'react'
import { useTranslation } from 'react-i18next'

import cls from './Main.module.scss'

function Main() {
  const { t } = useTranslation('main')

  return (
    <div className={cls.main}>
      {t('Main page')}
      <ErrorButton />
    </div>
  )
}

export default Main
