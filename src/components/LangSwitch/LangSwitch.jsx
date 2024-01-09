import React from 'react'
import { useTranslation } from 'react-i18next'
import './LangSwitch.css'

export const LangSwitch = () => {
  const { i18n } = useTranslation()

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ua' : 'en'
    i18n.changeLanguage(newLanguage)
  }

  return (
    <div className="lang-switch-container">
      <button className="lang-switch-button" onClick={changeLanguage}>
        {i18n.language.toUpperCase()}
      </button>
    </div>
  )
}
