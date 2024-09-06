import {RouterProvider, createBrowserRouter} from 'react-router-dom'


import LoginPage from "../components/Login/loginPage"
import Info from "../components/Info/info"
import SignupPage from "../components/SignUp/signupPage"
import Profile from "../components/Profile/profile"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <SignupPage/>
  },
  {
    path: "/info",
    element: <Info/>
  },
  {
    path: "/profile",
    element: <Profile/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
