import { FC, ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FormProvider, useFieldArray, useForm, SubmitHandler, FieldValues } from "react-hook-form"

import CharacteristicTableItem from '../CharacteristicTableItem/CharacteristicTableItem'
import { RootState } from '../../store/store'

import { Characteristic } from '../../interfaces'
import { IPropsCharacteristic } from './interfaces'

import style from './CharacteristicTable.module.scss'

const CharacteristicTable: FC<IPropsCharacteristic> = ({ title, characteristics }): ReactElement => {
  const errorState = useSelector((state: RootState) => state.error.errorState)

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
    const { characteristic } = data
    const unsortTrain: number[] = []

    characteristic.forEach((item: Characteristic) => {
      unsortTrain.push(item.speed)
    })
    const sortTrain = unsortTrain.sort((a, b) => {
      return a - b
    })
    console.log(sortTrain)
  }

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
            {fields.map((characteristic: any, index: number) => (
              <CharacteristicTableItem key={characteristic.id}
                characteristic={characteristic}
                characteristicIndex={index}
              />
            ))}
          </tbody>
        </table>
        <button className={style.Button} disabled={errorState}>Отправить</button>
      </form>
    </FormProvider>
  )
}

export default CharacteristicTable