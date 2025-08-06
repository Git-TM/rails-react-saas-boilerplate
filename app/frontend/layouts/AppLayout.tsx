import React from 'react'
import { Link } from '@inertiajs/react'
import { useTranslations } from '../hooks/useTranslations'

interface AppLayoutProps {
  children: React.ReactNode
  title?: string
  user?: {
    id: number
    email: string
    name?: string
  }
}

export default function AppLayout({ children, title, user }: AppLayoutProps) {
  const { t } = useTranslations()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-indigo-600">
                {t('app.name')}
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">
                    {t('nav.welcome', { name: user.name || user.email })}
                  </span>
                  <Link
                    href="/logout"
                    method="delete"
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    {t('nav.logout')}
                  </Link>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    href="/login"
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    {t('nav.login')}
                  </Link>
                  <Link
                    href="/register"
                    className="btn btn-primary text-sm"
                  >
                    {t('nav.register')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          </div>
        )}
        {children}
      </main>
    </div>
  )
} 