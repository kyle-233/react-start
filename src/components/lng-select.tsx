import { useTranslation } from 'react-i18next'

export const LngSelect = () => {
  const { i18n } = useTranslation()
  return (
    <select
      name="language"
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      value={i18n.language}
    >
      <option value="en">en</option>
      <option value="zh">zh</option>
    </select>
  )
}
