import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  AddCommentFormSchema,
} from '../types/addCommentFormSchema'

const initialState: AddCommentFormSchema = {
  isLoading: false,
  error: undefined,
  text: '',
}

export const addCommentFormSlice = createSlice({
  name: 'addCommentFormSlice',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(SERVICE_NAME.pending, (state, action) => {
  //       state.error = undefined
  //       state.isLoading = true
  //     })
  //     .addCase(
  //       SERVICE_NAME.fulfilled,
  //       (state, action: PayloadAction<AddCommentForm>) => {
  //         state.isLoading = false
  //       },
  //     )
  //     .addCase(SERVICE_NAME.rejected, (state, action) => {
  //       state.isLoading = false
  //       state.error = action.payload
  //     })
  // },
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
