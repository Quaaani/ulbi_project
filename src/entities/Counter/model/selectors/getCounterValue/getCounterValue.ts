import { createSelector } from '@reduxjs/toolkit'

import { getCounter } from '../getCounter/getCounter'

import type { CounterSchema } from '../../types/counterSchema'

// createSelector используется с помощью библиотеки reselect, которая используется внутри redux
// эта функция позволяет переиспользовать и комбинировать селекторы
// также она мемоизирует результат функции, если аргумент не был изменен
export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value)
