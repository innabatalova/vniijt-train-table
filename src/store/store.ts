import { configureStore } from '@reduxjs/toolkit'

import trainReducer from './slices/trainSlice'
import errorSlice from './slices/errorSlice'

const store =  configureStore({
  reducer: {
    train: trainReducer,
    error: errorSlice
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch