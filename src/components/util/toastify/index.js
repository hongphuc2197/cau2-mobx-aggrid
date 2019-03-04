import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Toastify = () => {
  return (
    <ToastContainer
      position='bottom-left'
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover
    />
  )
}
