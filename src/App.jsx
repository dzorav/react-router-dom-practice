
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import About from "./components/About"
import Contact from './components/Contact'
import Links from './components/Links'
import Home from './components/Home'
import Users, { loader as usersLoader } from './components/Users'
import SingleUser from './components/SingleUser'
import Layout from './components/Layout'
import UserPostBody from './components/UserPostBody'
import UserPostTitle from "./components/UserPostTitle"
import UserPostHome from "./components/UserPostHome"
import UserPostDashboard from "./components/UserPostDashboard"
import UserPostComments from "./components/UserPostComments";
import UserPostSingleComment from "./components/UserPostSingleComment"
import UserError from './components/UserError'

const routes = createRoutesFromElements(
  <Route element={<Layout />} errorElement={<UserError />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path="users" element={<Users />} loader={usersLoader} />
    <Route path="users/:id" element={<SingleUser />} />

    <Route path="user-posts" element={<UserPostHome />} >
      <Route index element={<UserPostDashboard />} />
      <Route path="body" element={<UserPostBody />} />
      <Route path="title" element={<UserPostTitle />}>
        <Route path="comments" element={<UserPostComments />} />
        <Route path="comments/:id" element={<UserPostSingleComment />} />
      </Route>
    </Route>
  </Route>
)

const router = createBrowserRouter(routes)

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
