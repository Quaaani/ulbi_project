import { classNames } from './classNames'

describe('classNames', () => {
  test('only first argument', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional arguments', () => {
    const expecting = 'someClass style anotherStyle'
    expect(classNames('someClass', {}, ['style', 'anotherStyle']))
      .toBe(expecting)
  })

  test('with mods true', () => {
    const expecting = 'someClass style hover visible'
    expect(classNames('someClass', { hover: true, visible: true }, ['style']))
      .toBe(expecting)
  })

  test('with mods false', () => {
    const expecting = 'someClass style hover'
    expect(classNames('someClass', { hover: true, visible: false }, ['style']))
      .toBe(expecting)
  })

  test('with mods undefined', () => {
    const expecting = 'someClass style hover'
    expect(classNames('someClass', { hover: true, visible: undefined }, ['style']))
      .toBe(expecting)
  })
})
