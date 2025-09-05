// import React from 'react'

import { useTranslation } from "react-i18next"

function About() {
  const {t} = useTranslation()
  return (
    <div>
      {t('About')}
    </div>
  )
}

export default About