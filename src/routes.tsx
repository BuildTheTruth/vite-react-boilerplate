import IndexPage from 'pages'
import UsersPage from 'pages/users'
import { Route, Routes } from 'react-router-dom'

const CombinedRoutes = () => (
  <Routes>
    <Route index element={<IndexPage />} />
    <Route path="/users" element={<UsersPage />} />
  </Routes>
)

export default CombinedRoutes
