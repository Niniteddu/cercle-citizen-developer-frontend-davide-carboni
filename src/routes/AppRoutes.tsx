import { Route, Routes } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import ObjectivesPage from '../pages/ObjectivesPage'
import ProcessPage from '../pages/ProcessPage'
import IcebreakerPage from '../pages/IcebreakerPage'
import MoodBarometerPage from '../pages/MoodBarometerPage'
import TaskWheelPage from '../pages/TaskWheelPage'
import WelcomePage from '../pages/WelcomePage'
import AboutPage from '../pages/AboutPage'
import { routePaths } from './routePaths'

// Keeps route definitions separate from the application entry point.
function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={routePaths.home} element={<WelcomePage />} />
        <Route path={routePaths.objectives} element={<ObjectivesPage />} />
        <Route path={routePaths.taskWheel} element={<TaskWheelPage />} />
        <Route path={routePaths.icebreaker} element={<IcebreakerPage />} />
        <Route path={routePaths.moodBarometer} element={<MoodBarometerPage />} />
        <Route path={routePaths.process} element={<ProcessPage />} />
        <Route path={routePaths.about} element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes