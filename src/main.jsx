import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './index.css'

import {createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home.jsx'
import Produtos from './components/Produtos.jsx'
import EditarProduto from './components/EditarProduto.jsx'
import Error from './components/Error.jsx'


const router = createBrowserRouter([
  {path:"/", element:<App/>, children:[
    {path: "/", element <Home/>},
    {path: "/", element <Produto/>},
    {path: "/", element <Error/>},
    {path: "/", element <EditarProduto/>},
  ]}
])
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

