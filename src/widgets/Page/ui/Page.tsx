import { StateSchema } from 'app/providers/StoreProvider'
import {
  getScrollRestorationByPath,
  scrollRestorationActions,
} from 'features/ScrollRestoration'
import { FC, MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { classNames, Mods } from 'shared/lib/helpers'
import {
  useAppDispatch,
  useInfiniteScroll,
  useInitialEffect,
  useThrottle,
} from 'shared/lib/hooks'

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
  const dispatch = useAppDispatch()
  const location = useLocation()
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollRestorationByPath(state, location.pathname),
  )

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollRestorationActions.setScrollPosition({
        path: location.pathname,
        position: event.currentTarget.scrollTop,
      }),
    )
  }, 500)

  const mods: Mods = {}
  return (
    <section
      data-testid="page.test"
      className={classNames(cls.page, mods, [className])}
      ref={wrapperRef}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
}
