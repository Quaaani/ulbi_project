import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/helpers'
import { Page, Text, TextSize } from 'shared/ui'

import cls from './NotFoundPage.module.scss'

interface NotFoundProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page className={classNames(cls.notFoundPage, {}, [className])}>
      <Text title={t('page-not-found')} size={TextSize.HEADER} />
    </Page>
  )
}
