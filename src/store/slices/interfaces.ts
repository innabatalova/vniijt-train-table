import { Characteristic } from '../../interfaces'

export interface TrainDataProps {
  name: string,
  description: string,
  characteristics: Characteristic[]
}

export interface IInitialState {
  train: TrainDataProps[],
  status: 'pending' | 'fulfilled' | 'rejected' | null,
  error: unknown | null
}

export interface ErrorState {
  errorState: boolean
}