import { FC, ReactElement, useState } from 'react'

import style from './MainTableItem.module.scss'

interface IProps {
  name: string,
  description: string
}

const MainTableItem: FC<IProps> = ({ name, description }): ReactElement => {
  return (
    <tr className={style.MainTableItem}>
      <td className={style.TitleName}>{name}</td>
      <td className={style.TitleDescription}>{description}</td>
    </tr>
  )
}

export default MainTableItem