import { FC, ReactElement, useEffect } from 'react'
import { FormProvider, useFieldArray, useForm, SubmitHandler, FieldValues } from "react-hook-form"

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
  const methods = useForm({
    mode: "onChange"
  })

  const { control, handleSubmit, reset } = methods
  const { fields } = useFieldArray({
    name: "characteristic",
    control
  })

  useEffect(() => {
    reset({
      characteristic: characteristics
    })
  }, [characteristics])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  // const sendForm = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()

  //   const unsortTrain: number[] = []

  //   characteristics.forEach((item: Characteristic) => {
  //     unsortTrain.push(item.speed)
  //   })
  //   const sortTrain = unsortTrain.sort(function (a, b) {
  //     return a - b
  //   })
  //   console.log(sortTrain)
  // }

  return (
    <FormProvider {...methods}>
      <form className={style.Form} onSubmit={handleSubmit(onSubmit)}>
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
            {fields.map((characteristic, index) => (
              <CharacteristicTableItem key={characteristic.id}
                characteristic={characteristic}
                characteristicIndex={index}
              />
            ))}
          </tbody>
        </table>
        <button className={style.Button}>Отправить</button>
      </form>
    </FormProvider>
  )
}

export default CharacteristicTable