import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation('translation')
  return <div>{t('edit')}</div>
}

export default App
