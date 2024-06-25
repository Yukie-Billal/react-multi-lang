import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const {t, i18n} = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t('welcome')}</h1>
      <div className="card">
        <h2>{t('description')}</h2>
        <div>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('id')}>Bahasa Indonesia</button>
        </div>
      </div>
    </>
  )
}

export default App
