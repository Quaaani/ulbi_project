import { useTranslation } from 'react-i18next'
import { Text, TextSize } from 'shared/ui'

import cls from './About.module.scss'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <div className={cls.about}>
      <Text size={TextSize.HEADER}>{t('About us')}</Text>
    </div>
  )
}

export default About
