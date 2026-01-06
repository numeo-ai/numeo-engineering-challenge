import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import $ from 'jquery'
import * as toastr from 'toastr'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'toastr/build/toastr.min.css'
import './index.css'

(window as any).$ = (window as any).jQuery = $
;(window as any).toastr = toastr

Object.assign(toastr.options || {}, {
  closeButton: true,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  showDuration: 300,
  hideDuration: 1000,
  timeOut: 5000,
  extendedTimeOut: 1000
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
