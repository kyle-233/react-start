import './App.css'
import { useTranslation } from 'react-i18next'
import { LngSelect } from '@/components/lng-select'
import { Button } from '@/components/ui/button'

function App() {
  const { t } = useTranslation('translation')
  return (
    <div>
      <LngSelect />
      {t('edit')}
      <Button>Click me</Button>
    </div>
  )
}

export default App
