import { FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'
import { useModal } from 'shared/lib/hooks'

import { Overlay } from '../../Overlay'
import { Portal } from '../../Portal'

import cls from './Modal.module.scss'

export interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  lazy?: boolean
  onClose: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  const { children, className, isOpen, lazy, onClose } = props
  const { isClosing, isMounted, close } = useModal({
    onClose,
    isOpen,
  })

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation()
  }

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div data-testid="modal.test" className={classNames(cls.modal, mods, [className])}>
        <Overlay onClose={close}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </Overlay>
      </div>
    </Portal>
  )
}
