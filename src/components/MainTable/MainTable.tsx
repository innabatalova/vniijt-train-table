import { FC, ReactElement, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import MainTableItem from '../MainTableItem/MainTableItem'

import { fetchTrain } from '../../store/slices/trainSlice'

import type { RootState, AppDispatch } from '../../store/store'

import style from './MainTable.module.scss'

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

const MainTable: FC = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>()
  const { status, train, error } = useSelector((state: RootState) => state.train)

  useEffect(() => {
    dispatch(fetchTrain())
  }, [dispatch])
  
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
        {status === 'pending' && <h2 className={style.Loading}>Загрузка...</h2>}
        {error !== null ? <h2 className={style.ErrorData}>Произошла ошибка загрузки данных</h2> : <></>}
        {
          train.map((item: TrainDataProps, index: number) => (
            <MainTableItem key={index} name={item.name} description={item.description} />
          ))
        }
      </tbody>
    </table>
  )
}

export default MainTable