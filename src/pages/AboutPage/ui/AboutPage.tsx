import { useTranslation } from 'react-i18next'
import { Page, Text, TextSize } from 'shared/ui'

import cls from './AboutPage.module.scss'

const AboutPage = () => {
  const { t } = useTranslation('aboutPage')

  return (
    <Page className={cls.aboutPage}>
      <Text title={t('About us')} size={TextSize.HEADER} />
    </Page>
  )
}

export default AboutPage
