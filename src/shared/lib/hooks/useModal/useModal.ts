import { useCallback, useEffect, useRef, useState } from "react"

interface UseModalProps {
  isOpen: boolean
  animationDelay?: number
  onClose: () => void
}

export const useModal = (props: UseModalProps) => {
  const {
    isOpen,
    animationDelay = 300,
    onClose
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [onClose, animationDelay])

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
      setIsMounted(true)
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

  return {
    isClosing,
    isMounted,
    close
  }
}
