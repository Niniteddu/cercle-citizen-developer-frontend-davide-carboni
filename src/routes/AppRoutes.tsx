import { Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import ObjectivesPage from '../pages/ObjectivesPage'
import ProcessPage from '../pages/ProcessPage'
import TaskWheelPage from '../pages/TaskWheelPage'
import WelcomePage from '../pages/WelcomePage'

// Keeps route definitions separate from the application entry point.
function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/objectifs" element={<ObjectivesPage />} />
        <Route path="/objectifs/roue-des-taches" element={<TaskWheelPage />} />
        <Route path="/demarche" element={<ProcessPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes