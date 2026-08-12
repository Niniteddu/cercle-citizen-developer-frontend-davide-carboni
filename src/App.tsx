import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ObjectivesPage from './pages/ObjectivesPage'
import ProcessPage from './pages/ProcessPage'
import WelcomePage from './pages/WelcomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/objectifs" element={<ObjectivesPage />} />
          <Route path="/demarche" element={<ProcessPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
