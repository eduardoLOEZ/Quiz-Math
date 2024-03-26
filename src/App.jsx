import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./styles/App.css"

import Main from './components/Main';
import Quiz from './components/Quiz';
import Result from './components/Result';



const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz',
    element : <Quiz></Quiz>
  },
  {
    path : '/result',
    element : <Result></Result>
  },
])



function App() {
  

  return (
    <>
     
     <RouterProvider router={router} />

    </>
  )
}

export default App
