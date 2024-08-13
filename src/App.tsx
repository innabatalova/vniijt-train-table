import { FC, ReactElement, useState } from 'react'

import MainTable from './components/MainTable/MainTable'
import CharacteristicTable from './components/CharacteristicTable/CharacteristicTable'

import { CharacteristicItem } from './interfaces'

import style from './App.module.scss'

const App: FC = (): ReactElement => {
  const [activeCharacteristic, setActiveCharacteristic] = useState<CharacteristicItem | null>(null)
  const setItem = (item: CharacteristicItem) => {
    setActiveCharacteristic(item)
  }

  return (
    <div className={style.App}>
      <h1 className={style.Title}>Характеристики поездов</h1>
      <div className={style.Wrap}>
        <MainTable activeItem={setItem} />
        {activeCharacteristic !== null &&
          <CharacteristicTable title={activeCharacteristic.name} characteristics={activeCharacteristic.characteristics} />
        }
      </div>
    </div>
  )
}

export default App
