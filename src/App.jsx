import { useRoutes } from 'react-router-dom'; // 1. Import the hook
import './App.css'
import Login from './auth/login/Login'
import Register from './auth/register/register'
import ForgotPassword from './auth/forgotPassword/forgotpassword'
import ProtectedRoutes from './components/ProtectedRoutes'
import Dashboard from './components/Dashboard/Dashboard'
import NotFound from './utils/NotFound';

// 2. Define your complete route configuration
const appRoutes = [
  // Public Routes
  {
    path: "/",
    element: <Login />
    // Note: 'exact: true' is not needed in react-router-dom v6.
    // All paths match exactly by default.
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },

  // Protected Routes
  // This object mirrors your nested <Route> structure
  {
    element: <ProtectedRoutes />, // The parent layout component
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      }
      // Add more protected routes here
      // { path: "/profile", element: <Profile /> },
      // { path: "/settings", element: <Settings /> }
    ]
  },
  {
    path:"*",
    element:< NotFound/>
  }
];

function App() {
  // 3. Use the hook to get the element tree
  const routes = useRoutes(appRoutes);

  // 4. Render the routes
  // This assumes <BrowserRouter> is wrapping <App /> in your main.js or index.js
  return (
    <>
      {routes}
    </>
  )
}

export default App