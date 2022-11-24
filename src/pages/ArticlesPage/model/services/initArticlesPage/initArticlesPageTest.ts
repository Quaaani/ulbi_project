// import { TestAsyncThunk } from 'shared/lib/helpers/tests/TestAsyncThunk'

// import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

// import { initArticlesPage } from './initArticlesPage'

// jest.mock('../fetchArticlesList/fetchArticlesList')

// describe('initArticlesPage Async Test', () => {
//   test('Success Request', async () => {
//     const thunk = new TestAsyncThunk(initArticlesPage, {
//       articlesPage: {
//         ids: [],
//         entities: {},
//         limit: 5,
//         isLoading: false,
//         hasMore: true,
//         _inited: true,
//       },
//     })
//     await thunk.callThunk()

//     expect(thunk.dispatch).toBeCalledTimes(4)
//     expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 })
//   })
//   test('Should not send Request', async () => {
//     const thunk = new TestAsyncThunk(initArticlesPage, {
//       articlesPage: {
//         ids: [],
//         entities: {},
//         limit: 5,
//         isLoading: false,
//         hasMore: true,
//         _inited: false,
//       },
//     })
//     await thunk.callThunk()

//     expect(thunk.dispatch).toBeCalledTimes(2)
//     expect(fetchArticlesList).not.toHaveBeenCalled()
//   })
// })
