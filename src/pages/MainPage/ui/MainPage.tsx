import { useTranslation } from 'react-i18next'

import cls from './MainPage.module.scss'

import { ErrorButton } from '@/app/providers/ErrorBoundary'
import { Text, TextSize } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'


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
