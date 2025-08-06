import { usePage } from '@inertiajs/react'

interface PageProps {
  translations: Record<string, any>
  locale: string
}

export function useTranslations() {
  const { props } = usePage<PageProps>()
  const { translations = {}, locale = 'en' } = props

  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.')
    let value = translations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }

    if (typeof value !== 'string') {
      return key
    }

    // Simple interpolation
    if (params) {
      return Object.entries(params).reduce(
        (str, [param, val]) => str.replace(new RegExp(`{{\\s*${param}\\s*}}`, 'g'), String(val)),
        value
      )
    }

    return value
  }

  return { t, locale }
} 