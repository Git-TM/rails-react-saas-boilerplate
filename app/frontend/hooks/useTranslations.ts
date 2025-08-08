// Import des traductions français
import frTranslations from '../../../config/locales/frontend/fr.json'

export function useTranslations() {
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = frTranslations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if not found
      }
    }

    return typeof value === 'string' ? value : key
  }

  return { t }
} 