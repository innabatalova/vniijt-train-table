import axios, { type AxiosPromise } from 'axios'

import { baseApi } from './utils/baseApi'
import { headers } from './utils/headers'

interface TrainDataProps {
  name: string,
  description: string,
  characteristics: Characteristic[]
}

interface Characteristic {
  speed: number,
  force: number,
  engineAmperage: number
}

export const axiosTrainData = (): AxiosPromise =>
  axios.get<TrainDataProps[]>(baseApi, { headers })

export default axiosTrainData

