import { FC, Suspense } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './Error.module.scss'

import { classNames } from '@/shared/lib/helpers'
import { Button } from '@/shared/ui/Button'


interface ErrorProps {
  className?: string
}

export const Error: FC<ErrorProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <Suspense fallback="">
      <div className={classNames(cls.error, {}, [className])}>
        <p>{t('some-error-was-found')}</p>
        <Button title={t('reload-page')} onClick={reloadPage} />
      </div>
    </Suspense>
  )
}
