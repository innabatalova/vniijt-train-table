import { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react'

import style from './CharacteristicTableItem.module.scss'

interface IProps {
  speed: number,
  force: number,
  engineAmperage: number
}

const CharacteristicTableItem: FC<IProps> = ({ speed, force, engineAmperage }): ReactElement => {
  const [state, setState] = useState<IProps>({ speed, force, engineAmperage })

  useEffect(() => {
    setState({ speed, force, engineAmperage })
  }, [speed, force, engineAmperage])

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.dataset.attr) {
      case 'speed':
        setState({
          speed: Number(event.target.value),
          force,
          engineAmperage
        })
        break
      case 'force':
        setState({
          speed,
          force: Number(event.target.value),
          engineAmperage
        })
        break
      case 'engineAmperage':
        setState({
          speed,
          force,
          engineAmperage: Number(event.target.value)
        })
        break
      default:
        break
    }
  }

  return (
    <tr className={style.CharacteristicTableItem} >
      <td className={style.TitleSpeed}>
        <input type="text" value={state.speed} onChange={changeValue} data-attr='speed' />
      </td>
      <td className={style.TitleForce}>
        <input type="text" value={state.force} onChange={changeValue} data-attr='force' />
      </td>
      <td className={style.TitleEngine}>
        <input type="text" value={state.engineAmperage} onChange={changeValue} data-attr='engineAmperage' />
      </td>
    </tr>
  )
}

export default CharacteristicTableItem