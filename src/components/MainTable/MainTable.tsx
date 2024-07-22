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

interface CharacteristicItem {
  name: string,
  characteristics: Characteristic[]
}

interface TrainDataProps {
  name: string,
  description: string,
  characteristics: Characteristic[]
}

interface IProps {
  activeItem: (item: CharacteristicItem) => void
}

const MainTable: FC<IProps> = ({ activeItem }): ReactElement => {
  const dispatch = useDispatch<AppDispatch>()
  const { status, train, error } = useSelector((state: RootState) => state.train)

  useEffect(() => {
    dispatch(fetchTrain())
  }, [dispatch])

  const setItem = (item: CharacteristicItem) => {
    activeItem(item)
  }
  
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
        {status === 'pending' && <tr><td className={style.Loading}>Загрузка...</td></tr>}
        {error !== null ? <tr><td className={style.ErrorData}>Произошла ошибка загрузки данных</td></tr> : <></>}
        {
          train.map((item: TrainDataProps, index: number) => (
            <MainTableItem key={index} name={item.name} description={item.description} characteristics={item.characteristics} activeItem={setItem}/>
          ))
        }
      </tbody>
    </table>
  )
}

export default MainTable