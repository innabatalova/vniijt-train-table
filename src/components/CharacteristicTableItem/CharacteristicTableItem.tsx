import { FC, ReactElement } from 'react'

import style from './CharacteristicTableItem.module.scss'

interface IProps {
  speed: number,
  force: number,
  engineAmperage: number
}

const CharacteristicTableItem: FC<IProps> = ({ speed, force, engineAmperage }): ReactElement => {
  return (
    <tr className={style.CharacteristicTableItem}>
      <td className={style.TitleSpeed}>
        <input type="text" defaultValue={speed} />
      </td>
      <td className={style.TitleForce}>
        <input type="text" defaultValue={force} />
      </td>
      <td className={style.TitleEngine}>
        <input type="text" defaultValue={engineAmperage} />
      </td>
    </tr>
  )
}

export default CharacteristicTableItem