export interface Characteristic {
  speed: number,
  force: number,
  engineAmperage: number
}

export interface CharacteristicItem {
  name: string,
  characteristics: Characteristic[]
}