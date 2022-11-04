import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Text, TextSize } from 'shared/ui'

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

import cls from './Counter.module.scss'

interface CounterProps {}

export const Counter: FC<CounterProps> = (props) => {
  const { t } = useTranslation('aboutPage')
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
        <Text title={t('value')} size={TextSize.LARGE} />
        <Text
          data-testid="counterValue.test"
          title={counterValue}
          size={TextSize.LARGE}
        />
      </div>
      <div className={cls.btnsWrapper}>
        <Button
          data-testid="incrementBtn.test"
          title={t('increment')}
          onClick={increment}
        />
        <Button
          data-testid="decrementBtn.test"
          className={cls.lastBtn}
          title={t('decrement')}
          onClick={decrement}
        />
      </div>
    </div>
  )
}
