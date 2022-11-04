import { ErrorButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'
import { Text, TextSize } from 'shared/ui'

import cls from './MainPage.module.scss'

function MainPage() {
  const { t } = useTranslation('mainPage')

  return (
    <div className={cls.mainPage}>
      <Text title={t('Main page')} size={TextSize.HEADER} />
      <ErrorButton />
    </div>
  )
}

export default MainPage
