import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
