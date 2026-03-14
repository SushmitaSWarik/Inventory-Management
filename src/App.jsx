import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./components/layout/Layout";

import ProductCatalog from "./pages/product/ProductCatalog";
import ManageProducts from "./pages/product/ManageProducts";

import ProductInventory from "./pages/inventory/ProductInventory";
import RawInventory from "./pages/inventory/RawInventory";

import CreateOrder from "./pages/pos/create_order/CreateOrder";
import CreateAdvanceOrder from "./pages/pos/CreateAdvanceOrder";
import Orders from "./pages/pos/Orders";
import PendingOrders from "./pages/pos/PendingOrders";
import PurchaseOrders from "./pages/pos/PurchaseOrders";

import Suppliers from "./pages/users/Suppliers";
import Customers from "./pages/users/Customers";
import CreateAdmin from "./pages/users/CreateAdmin";
import StockManagement from "./pages/stock_management/StockManagement";

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

          <Route path="product-inventory" element={<ProductInventory />} />

          <Route path="raw-inventory" element={<RawInventory />} />

          <Route path="create-order" element={<CreateOrder />} />

          <Route
            path="/create-advance-order"
            element={<CreateAdvanceOrder />}
          />

          <Route path="/orders" element={<Orders />} />

          <Route path="/pending-orders" element={<PendingOrders />} />

          <Route path="/purchase-orders" element={<PurchaseOrders />} />

          <Route path="/suppliers" element={<Suppliers />} />

          <Route path="/customers" element={<Customers />} />

          <Route path="/create-admin" element={<CreateAdmin />} />

          {/* <Route path="/stock" element={<StockManagement />} /> */}
        </Route>

        {/* Optional redirect */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
