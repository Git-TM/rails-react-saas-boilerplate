import React from 'react'
import AppLayout from '../layouts/AppLayout'
import { useTranslations } from '../hooks/useTranslations'

interface HomeProps {
  user?: {
    id: number
    email: string
    name?: string
  }
}

export default function Home({ user }: HomeProps) {
  const { t } = useTranslations()

  return (
    <AppLayout user={user} title={t('pages.home.title')}>
      <div className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('pages.home.welcome')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('pages.home.description')}
          </p>
          
          {!user && (
            <div className="space-x-4">
              <a href="/register" className="btn btn-primary">
                {t('pages.home.get_started')}
              </a>
              <a href="/login" className="btn btn-secondary">
                {t('pages.home.sign_in')}
              </a>
            </div>
          )}

          {user && (
            <div className="bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t('pages.home.dashboard')}
              </h3>
              <p className="text-gray-600">
                {t('pages.home.logged_in_as', { email: user.email })}
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
} 