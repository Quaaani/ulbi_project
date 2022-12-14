import { useTranslation } from 'react-i18next'

import cls from './AboutPage.module.scss'

import { Text, TextSize } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'


const AboutPage = () => {
  const { t } = useTranslation('aboutPage')

  return (
    <Page className={cls.aboutPage}>
      <Text title={t('About us')} size={TextSize.HEADER} />
    </Page>
  )
}

export default AboutPage
