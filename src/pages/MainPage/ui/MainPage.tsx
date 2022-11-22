import { ErrorButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'
import { Page, Text, TextSize } from 'shared/ui'

import cls from './MainPage.module.scss'

function MainPage() {
  const { t } = useTranslation('mainPage')

  return (
    <Page className={cls.mainPage}>
      <Text title={t('Main page')} size={TextSize.HEADER} />
      <ErrorButton />
    </Page>
  )
}

export default MainPage
