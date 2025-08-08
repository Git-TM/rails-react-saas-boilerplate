import { createInertiaApp } from '@inertiajs/react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import AppLayout from '../layouts/AppLayout'

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
    const page = pages[`../pages/${name}.tsx`]
    
    // Appliquer le layout global à toutes les pages
    if (page && page.default) {
      page.default.layout = page.default.layout || ((page) => createElement(AppLayout, null, page))
    }
    
    return page
  },
  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(createElement(App, props))
  },
})