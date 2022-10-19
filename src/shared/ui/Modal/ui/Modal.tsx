import {
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { classNames } from 'shared/lib/helpers'
import { Portal } from 'shared/ui/Portal/Portal'

import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  lazy?: boolean
  onClose?: () => void
}

const ANIMATION_DURATION = 300

export const Modal: FC<ModalProps> = (props) => {
  const { children, className, isOpen, lazy, onClose } = props

  const [isClosing, setIsClosing] = useState(false)
  const [modalIsMounted, setModalIsMounted] = useState(false)

  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DURATION)
    }
  }, [onClose])

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation()
  }

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    },
    [close],
  )

  useEffect(() => {
    if (isOpen) {
      setModalIsMounted(true)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !modalIsMounted) {
    return null
  }

  return (
    <Portal>
      <div
        data-testid="modal.test"
        className={classNames(cls.modal, mods, [className])}
      >
        <div className={cls.overlay} onClick={close}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
