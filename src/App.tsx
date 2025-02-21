import './App.css'
import { useTranslation } from 'react-i18next'
import { LngSelect } from './components/lng-select'

function App() {
  const { t } = useTranslation('translation')
  return (
    <div>
      <LngSelect />
      {t('edit')}
    </div>
  )
}

export default App
