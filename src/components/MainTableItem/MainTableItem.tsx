import { FC, ReactElement } from 'react'

import style from './MainTableItem.module.scss'

interface Characteristic {
  speed: number,
  force: number,
  engineAmperage: number
}

interface CharacteristicItem {
  name: string,
  characteristics: Characteristic[]
}

interface IProps {
  name: string,
  description: string,
  characteristics: Characteristic[],
  activeItem: (item: CharacteristicItem) => void
}

const MainTableItem: FC<IProps> = ({ name, description, characteristics, activeItem }): ReactElement => {
  const setItem = () => {
    activeItem({ name, characteristics })
  }

  return (
    <tr className={style.MainTableItem} onClick={setItem}>
      <td className={style.TitleName}>{name}</td>
      <td className={style.TitleDescription}>{description}</td>
    </tr>
  )
}

export default MainTableItem