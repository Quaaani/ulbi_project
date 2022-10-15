import React from 'react'
import { useTranslation } from 'react-i18next'

import cls from './About.module.scss'

const About = () => {
  const { t } = useTranslation('about')

  return <div className={cls.about}>{t('About us')}</div>
}

export default About
