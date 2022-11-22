import { FC, MutableRefObject, ReactNode, useRef } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'
import { useInfiniteScroll } from 'shared/lib/hooks'

import cls from './Page.module.scss'

export interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page: FC<PageProps> = (props) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  const mods: Mods = {}
  return (
    <section
      data-testid="page.test"
      className={classNames(cls.page, mods, [className])}
      ref={wrapperRef}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
}
