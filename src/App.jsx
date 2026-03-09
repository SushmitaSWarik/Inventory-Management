import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/layout/Layout"

import ProductCatalog from "./features/products/pages/ProductCatalog"
import ManageProducts from "./features/products/pages/ManageProducts"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Layout */}
        <Route path="/" element={<Layout />}>

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="product-catalog" element={<ProductCatalog />} />

          <Route path="manage-products" element={<ManageProducts />} />

        </Route>

        {/* Optional redirect */}
        <Route path="*" element={<Navigate to="/dashboard" />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App