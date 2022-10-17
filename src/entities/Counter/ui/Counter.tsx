import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Text, TextSize } from 'shared/ui'

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

import cls from './Counter.module.scss'

interface CounterProps {}

export const Counter: FC<CounterProps> = (props) => {
  const { t } = useTranslation('about')
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div data-testid="counter.test">
      <div className={cls.valueWrapper}>
        <Text size={TextSize.LARGE}>{t('value')}:</Text>
        <Text size={TextSize.LARGE} data-testid="counterValue.test">
          {counterValue}
        </Text>
      </div>
      <div className={cls.btnsWrapper}>
        <Button data-testid="incrementBtn.test" onClick={increment}>
          {t('increment')}
        </Button>
        <Button
          data-testid="decrementBtn.test"
          className={cls.lastBtn}
          onClick={decrement}
        >
          {t('decrement')}
        </Button>
      </div>
    </div>
  )
}
