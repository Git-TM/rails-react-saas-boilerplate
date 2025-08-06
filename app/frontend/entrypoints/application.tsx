import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@inertiajs/react/server'
import '../stylesheets/application.css'

const appName = 'Rails React SaaS Boilerplate'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(<App {...props} />)
  },
  progress: {
    color: '#4F46E5',
  },
}) 