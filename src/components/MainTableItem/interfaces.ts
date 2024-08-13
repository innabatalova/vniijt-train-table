import { Characteristic } from '../../interfaces'

interface CharacteristicItem {
  name: string,
  characteristics: Characteristic[]
}

export interface IProps {
  name: string,
  description: string,
  characteristics: Characteristic[],
  activeItem: (item: CharacteristicItem) => void
}