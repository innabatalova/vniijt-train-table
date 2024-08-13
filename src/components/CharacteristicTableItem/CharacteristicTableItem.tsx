import { FC, ReactElement, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Controller, useFormContext } from "react-hook-form"

import { RootState } from '../../store/store'
import { disabledButton, unDisabledButton } from '../../store/slices/errorSlice'

import style from './CharacteristicTableItem.module.scss'

interface ICharacteristic {
  speed: number,
  force: number,
  engineAmperage: number
}

interface IProps {
  characteristic: ICharacteristic,
  characteristicIndex: number
}

const CharacteristicTableItem: FC<IProps> = ({ characteristic, characteristicIndex }): ReactElement => {
  const errorState = useSelector((state: RootState) => state.error.errorState)
  const dispatch = useDispatch()

  const { speed, force, engineAmperage } = characteristic
  const [state, setState] = useState<ICharacteristic>({ speed, force, engineAmperage })
  const { register, getFieldState, formState: { errors } } = useFormContext()

  useEffect(() => {
    setState({ speed, force, engineAmperage })
  }, [speed, force, engineAmperage])

  useEffect(() => {
    errors.characteristic !== undefined ? dispatch(disabledButton()) : dispatch(unDisabledButton())
  }, [errors.characteristic])

  return (
    <tr className={style.CharacteristicTableItem} >
      <td className={errors.characteristic &&
        (getFieldState(`characteristic[${characteristicIndex}].speed`)).error?.ref?.name === `characteristic[${characteristicIndex}].speed`
        ? style.FieldError + ' ' + style.TitleSpeed : style.TitleSpeed}>
        <Controller
          name={`characteristic[${characteristicIndex}].speed`}
          render={({ field: { value = state.speed } }) => (
            <input type="text" value={value}
              {...register(`characteristic[${characteristicIndex}].speed` as const, {
                pattern: /^\d+$/i, required: true
              })} />
          )}
        />
        {errors.characteristic &&
          (getFieldState(`characteristic[${characteristicIndex}].speed`)).error?.ref?.name === `characteristic[${characteristicIndex}].speed`
          && <p className={style.Error}>Скорость должна быть неотрицательным целым числом!</p>}

      </td>
      <td className={errors.characteristic &&
        (getFieldState(`characteristic[${characteristicIndex}].force`)).error?.ref?.name === `characteristic[${characteristicIndex}].force`
        ? style.FieldError + ' ' + style.TitleForce : style.TitleForce}>
        <Controller
          name={`characteristic[${characteristicIndex}].force`}
          render={({ field: { value = state.force } }) => (
            <input type="text" value={value}
              {...register(`characteristic[${characteristicIndex}].force` as const, {
                pattern: /^[0-9]*[.,][0-9]+$/i, required: true
              })} />
          )}
        />
        {errors.characteristic &&
          (getFieldState(`characteristic[${characteristicIndex}].force`)).error?.ref?.name === `characteristic[${characteristicIndex}].force`
          && <p className={style.Error}>Сила тяги должна быть положительным числом с плавающей запятой!</p>}
      </td>
      <td className={errors.characteristic &&
        (getFieldState(`characteristic[${characteristicIndex}].engineAmperage`)).error?.ref?.name === `characteristic[${characteristicIndex}].engineAmperage`
        ? style.FieldError + ' ' + style.TitleEngine : style.TitleEngine}>
        <Controller
          name={`characteristic[${characteristicIndex}].engineAmperage`}
          render={({ field: { value = state.engineAmperage } }) => (
            <input type="text" value={value}
              {...register(`characteristic[${characteristicIndex}].engineAmperage` as const, {
                pattern: /^[1-9]\d*$/i, required: true
              })} />
          )}
        />
        {errors.characteristic &&
          (getFieldState(`characteristic[${characteristicIndex}].engineAmperage`)).error?.ref?.name === `characteristic[${characteristicIndex}].engineAmperage`
          && <p className={style.Error}>Ток двигателя должен быть положительным целым числом!</p>}
      </td>
    </tr>
  )
}

export default CharacteristicTableItem