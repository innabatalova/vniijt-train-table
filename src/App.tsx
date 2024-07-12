import { FC, ReactElement } from 'react'

import MainTable from './components/MainTable/MainTable'

import style from './App.module.scss'

const App: FC = (): ReactElement => {
  return (
    <div className={style.App}>
      <h1 className={style.Title}>Характеристики поездов</h1>
      <div className={style.Wrap}>
        <MainTable />
      </div>
    </div>
  )
}

export default App
