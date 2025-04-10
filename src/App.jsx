import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
