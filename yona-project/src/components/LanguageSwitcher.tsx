// import React from 'react'
import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
    const { i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }
  return (
    <select name="border rounded p-2 text-lg"
    onChange={(e) => changeLanguage(e.target.value)}
    value={i18n.language}
    >
        <option value="en">English</option>
        <option value="ru">Русский</option>
    </select>
  )
}

export default LanguageSwitcher
