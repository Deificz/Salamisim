import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface initialState {
  value: number
}

const initialState: initialState = {
  value: 0,
}

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    //reducerName: (state, action: PayloadAction<string>) => { },
  },
})

export const { } = userAuthSlice.actions

export default userAuthSlice.reducer