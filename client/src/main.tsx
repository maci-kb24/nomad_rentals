import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthProvider } from './context/AuthContext'
import { App } from './components/app'


const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <AuthProvider>
        <App />
        {/* <RouterProvider router={router} /> */}
      </AuthProvider>
    </StrictMode>,
  )
}
