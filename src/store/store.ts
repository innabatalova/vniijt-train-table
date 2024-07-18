import { configureStore } from '@reduxjs/toolkit'

import trainReducer from './slices/trainSlice'

const store =  configureStore({
  reducer: {
    train: trainReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch