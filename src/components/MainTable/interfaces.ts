import { Characteristic } from '../../interfaces'

export interface CharacteristicItem {
  name: string,
  characteristics: Characteristic[]
}

export interface TrainDataProps {
  name: string,
  description: string,
  characteristics: Characteristic[]
}

export interface IProps {
  activeItem: (item: CharacteristicItem) => void
}