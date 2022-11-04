import { useTranslation } from 'react-i18next'
import { Text, TextSize } from 'shared/ui'

import cls from './AboutPage.module.scss'

const AboutPage = () => {
  const { t } = useTranslation('aboutPage')

  return (
    <div className={cls.aboutPage}>
      <Text title={t('About us')} size={TextSize.HEADER} />
    </div>
  )
}

export default AboutPage
