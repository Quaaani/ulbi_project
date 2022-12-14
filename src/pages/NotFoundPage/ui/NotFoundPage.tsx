import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './NotFoundPage.module.scss'

import { classNames } from '@/shared/lib/helpers'
import { Text, TextSize } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'


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
