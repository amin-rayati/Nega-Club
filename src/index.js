import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ProductsProvider } from './context/ProductsProvider'
import { CookiesProvider } from 'react-cookie'
ReactDOM.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,
  document.getElementById('root')
)
ReactDOM.render(
  <CookiesProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </CookiesProvider>,
  document.getElementById('root')
)
