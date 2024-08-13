import axios, { type AxiosPromise } from 'axios'

import { baseApi } from './utils/baseApi'
import { headers } from './utils/headers'

import { TrainDataProps } from './utils/interfaces'

export const axiosTrainData = (): AxiosPromise =>
  axios.get<TrainDataProps[]>(baseApi, { headers })

export default axiosTrainData

