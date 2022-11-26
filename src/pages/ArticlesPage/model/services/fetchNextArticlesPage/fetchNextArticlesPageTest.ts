// import { TestAsyncThunk } from 'shared/lib/helpers/tests/testAsyncThunk'

// import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

// import { fetchNextArticlesPage } from './fetchNextArticlesPage'

// jest.mock('../fetchArticlesList/fetchArticlesList')

// describe('fetchNextArticlesPage Async Test', () => {
//   test('Success Request Test', async () => {
//     const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
//       articlesPage: {
//         page: 2,
//         ids: [],
//         entities: {},
//         limit: 5,
//         isLoading: false,
//         hasMore: true,
//       },
//     })
//     await thunk.callThunk()

//     expect(thunk.dispatch).toBeCalledTimes(4)
//     expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 })
//   })
//   test('Shouldnt be called when hasMore is false', async () => {
//     const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
//       articlesPage: {
//         page: 2,
//         ids: [],
//         entities: {},
//         limit: 5,
//         isLoading: false,
//         hasMore: false,
//       },
//     })
//     await thunk.callThunk()

//     expect(thunk.dispatch).toBeCalledTimes(2)
//     expect(fetchArticlesList).not.toHaveBeenCalled()
//   })

//   test('Shouldnt be called when isLoading is true', async () => {
//     const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
//       articlesPage: {
//         page: 2,
//         ids: [],
//         entities: {},
//         limit: 5,
//         isLoading: true,
//         hasMore: true,
//       },
//     })
//     await thunk.callThunk()

//     expect(thunk.dispatch).toBeCalledTimes(2)
//     expect(fetchArticlesList).not.toHaveBeenCalled()
//   })
// })
