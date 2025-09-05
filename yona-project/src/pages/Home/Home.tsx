import { useTranslation } from "react-i18next"

// import React from 'react'

function Home() {
  const { t } = useTranslation()
  return (
    <h1>
      {t('Home')} <h1></h1>
      {t('Welcome')}
    </h1>
  )
}

export default Home