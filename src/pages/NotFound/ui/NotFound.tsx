import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/helpers'

import cls from './NotFound.module.scss'

interface NotFoundProps {
  className?: string
}

export const NotFound: FC<NotFoundProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.notFound, {}, [className])}>
      {t('page-not-found')}
    </div>
  )
}
