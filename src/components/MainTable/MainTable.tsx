import { FC, ReactElement, useState, useEffect, useCallback } from 'react'

import MainTableItem from '../MainTableItem/MainTableItem'

import axios from 'axios'

import { headers } from '../../api/headers'
import { baseApi } from '../../api/baseApi'

import style from './MainTable.module.scss'

interface TrainDataProps {
  name: string;
  description: string;
  characteristics: Characteristic[];
}

interface Characteristic {
  speed: number;
  force: number;
  engineAmperage: number;
}

const MainTable: FC = (): ReactElement => {
  const [trainData, setTrainData] = useState<TrainDataProps[] | []>([])

  const getTrainData = useCallback<() => Promise<void>>(async () => {
    try {
      axios.get(baseApi, { headers })
        .then(function (response) {
          console.log(response)
          const getTrainData = response.data
          setTrainData(getTrainData)
        })
        .catch(function (error) {
          console.error(error)
        })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    getTrainData()
  }, [getTrainData])

  return (
    <table className={style.MainTable}>
      <caption className={style.Title}>Поезда</caption>
      <thead>
        <tr>
          <th className={style.HeadTitle}>Название</th>
          <th className={style.HeadTitle}>Описание</th>
        </tr>
      </thead>
      <tbody>
        {
          trainData.map((item: any, index: number) => (
            <MainTableItem key={index} name={item.name} description={item.description} />
          ))
        }
      </tbody>
    </table>
  )
}

export default MainTable