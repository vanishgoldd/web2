import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import App from './App.tsx'
import './index.css'
import './i18n'
import { AuthProvider } from './context/auth-context'

// Удалили BrowserRouter, так как теперь используем HashRouter в router-config.tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <ToastProvider />
      <AuthProvider>
        <App />
      </AuthProvider>
    </HeroUIProvider>
  </React.StrictMode>,
)