import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/LoginPage'
import ErrorPage from './Pages/ErrorPage'

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* <Route path='/login' element = {< LoginPage />} /> */}
        <Route index element = {< LoginPage />} />
        <Route path='*' element = {< ErrorPage />} />
      </Route>
    )
  )
  

  return (
    <>

    <RouterProvider router={route}/>

    </>
  )
}

export default App
