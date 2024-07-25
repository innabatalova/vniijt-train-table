import { FC, ReactElement, FormEvent } from 'react'

import CharacteristicTableItem from '../CharacteristicTableItem/CharacteristicTableItem'

import style from './CharacteristicTable.module.scss'

interface Characteristic {
  speed: number,
  force: number,
  engineAmperage: number
}

interface IPropsCharacteristic {
  title: string,
  characteristics: Characteristic[]
}

const CharacteristicTable: FC<IPropsCharacteristic> = ({ title, characteristics }): ReactElement => {
  const sendForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const unsortTrain: number[] = []

    characteristics.forEach((item: Characteristic) => {
      unsortTrain.push(item.speed)
    })
    const sortTrain = unsortTrain.sort(function (a, b) {
      return a - b
    })
    console.log(sortTrain)
  }

  return (
    <form className={style.Form} onSubmit={sendForm}>
      <table className={style.CharacteristicTable}>
        <caption className={style.Title}>Характеристики {title}</caption>
        <thead>
          <tr>
            <th className={style.HeadTitle}>Скорость, км/ч</th>
            <th className={style.HeadTitle}>Сила тяги, кН</th>
            <th className={style.HeadTitle}>Ток двигателя, A</th>
          </tr>
        </thead>
        <tbody>
          {
            characteristics.map((item: Characteristic, index: number) => (
              <CharacteristicTableItem key={index} speed={item.speed} force={item.force} engineAmperage={item.engineAmperage} />
            ))
          }
        </tbody>
      </table>
      <button className={style.Button}>Отправить</button>
    </form>
  )
}

export default CharacteristicTable