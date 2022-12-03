import { FC } from 'react'
import { classNames } from 'shared/lib/helpers'
import { Portal } from 'shared/ui/Portal'
import { Spinner } from 'shared/ui/Spinner'

import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props

  return (
    <Portal>
      <div className={classNames(cls.pageLoader, {}, [className])}>
        <Spinner className={cls.spinner} />
      </div>
    </Portal>
  )
}
