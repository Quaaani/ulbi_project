import { createContext, ReactNode, useRef, useState, useEffect, useMemo, useContext } from 'react'

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextPayload {
  Spring?: SpringType
  Gesture?: GestureType
  isLoaded?: boolean // true - библиотеки подгрузились; false - еще не подгрузились
}

const AnimationContext = createContext<AnimationContextPayload>({})

// Функция для асинхронной подгрузки библиотек
const getAsyncAnimationModules = () =>
  // Promis.all для одновременной подгрузки всез библиотек из массива
  Promise.all([import('@react-spring/web'), import('@use-gesture/react')])

// Required<...> нужен, чтобы обязать хук вернуть все поля, описанные в интерфейсе
export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextPayload>

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  // Рефы, в которых будут хранится библиотеки
  const SpringRef = useRef<SpringType>()
  const GestureRef = useRef<GestureType>()

  // Состояние загрузки библиотек
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Вызов вспомогательной функции для загрузки либ
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      // Сохраняем библиотеки в рефы
      SpringRef.current = Spring
      GestureRef.current = Gesture

      // Меняем флаг
      setIsLoaded(true)
    })
  }, [])

  // Оборачиваем value для провайдера в useMemo
  const value = useMemo(
    () => ({
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded,
    }),
    [isLoaded],
  )

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>
}
