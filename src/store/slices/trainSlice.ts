import { createSlice, createAsyncThunk, ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import axiosTrainData from '../../api/trainApi'

import { AxiosError } from 'axios'

interface Characteristic {
  speed: number,
  force: number,
  engineAmperage: number
}

interface TrainDataProps {
  name: string,
  description: string,
  characteristics: Characteristic[]
}

interface IInitialState {
  train: TrainDataProps[],
  status: 'pending' | 'fulfilled' | 'rejected' | null,
  error: unknown | null
}

const initialState: IInitialState = {
  status: null,
  train: [],
  error: null
}

export const fetchTrain = createAsyncThunk(
  'train/fetchTrain',
  async function (_, {rejectWithValue}) {
    try {
      const response = await axiosTrainData()

      if (response.status !== 200){
        throw new Error('Server error!')
      }

      return response.data
    } catch (error: unknown) {

      const err = error as AxiosError
      return rejectWithValue(err.message)
    }
  }
)

const trainSlice = createSlice({
  name: 'train',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IInitialState>) => {
    builder.addCase(fetchTrain.pending, (state: typeof initialState) => {
      state.status = 'pending'
      state.error = null
    })
    builder.addCase(fetchTrain.fulfilled, (state: typeof initialState, action: PayloadAction<TrainDataProps[]>) => {
      state.status = 'fulfilled'
      state.train = action.payload
    })
    builder.addCase(fetchTrain.rejected, (state: typeof initialState, action: PayloadAction<unknown>) => {
      state.status = 'rejected'
      state.error = action.payload
    })
  },
})

export default trainSlice.reducer


