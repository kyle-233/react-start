import './App.css'
import { useTranslation } from 'react-i18next'
import { LngSelect } from '@/components/lng-select'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from './components/mode-toggle'

function App() {
  const { t } = useTranslation('translation')
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LngSelect />
      {t('edit')}
      <Button>Click me</Button>
      <ModeToggle />
    </ThemeProvider>
  )
}

export default App
