import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'

import cls from './RatingCard.module.scss'

import { classNames, Mods } from '@/shared/lib/helpers'
import { Card } from '@/shared/ui/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { StarRating } from '@/shared/ui/StarRating'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'

export interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  rate?: number
  onAccept?: (starsCount: number, feedback?: string) => void
  onCancel?: (starsCount: number) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
  const { className, title, feedbackTitle, hasFeedback, rate = 0, onAccept, onCancel } = props
  const { t } = useTranslation()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount)

      if (hasFeedback) {
        setModalIsOpen(true)
      } else {
        onAccept?.(selectedStarsCount)
      }
    },
    [hasFeedback, onAccept],
  )

  const onAcceptHandler = useCallback(() => {
    setModalIsOpen(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const onCancelHandler = useCallback(() => {
    setModalIsOpen(false)
    onCancel?.(starsCount)
  }, [onCancel, starsCount])

  const titleMessage = starsCount ? t('thanks-for-rate') : title

  const mods: Mods = {}

  const modalContent = (
    <VStack max gap="32">
      <Text title={feedbackTitle} />
      <Input placeholder={t('your-message')} onChange={setFeedback} />
      <HStack max gap="16" justify="end">
        <Button title={t('send')} onClick={onAcceptHandler} />
        <Button title={t('close')} theme={ButtonTheme.INVERTED} onClick={onCancelHandler} />
      </HStack>
    </VStack>
  )

  return (
    <Card
      className={classNames(cls.ratingCard, mods, [className])}
      renderContent={() => (
        <VStack gap="8" align="center">
          <Text title={titleMessage} />
          <StarRating selectedStars={rate} onSelect={onSelectStars} />
          <BrowserView>
            <Modal lazy isOpen={modalIsOpen} onClose={onCancelHandler}>
              {modalContent}
            </Modal>
          </BrowserView>
          <MobileView>
            <Drawer lazy isOpen={modalIsOpen} onClose={onCancelHandler}>
              {modalContent}
            </Drawer>
          </MobileView>
        </VStack>
      )}
    />
  )
})
