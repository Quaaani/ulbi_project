import { getQueryParams } from "./addQueryParams"

describe('getQueryParams Function Test', () => {
  test('Test with one param', () => {
    const params = getQueryParams({
      test: 'value'
    })
    expect(params).toBe('?test=value')
  })
  test('Test with two params', () => {
    const params = getQueryParams({
      test: 'value',
      page: '16',
    })
    expect(params).toBe('?test=value&page=16')
  })
  test('Test with undefined param', () => {
    const params = getQueryParams({
      test: 'value',
      page: undefined,
    })
    expect(params).toBe('?test=value')
  })
})

