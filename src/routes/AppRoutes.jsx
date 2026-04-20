import React, { Suspense, lazy } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

// 🧩 Layout
import Layout from "../pages/Layout"
import Loader from "../components/Loader"

// 📦 Lazy Pages
const Home = lazy(() => import("../pages/home/Home"))

// 🔐 Protected Route (simple version)
const ProtectedRoute = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("appState"))
  const isLoggedIn = auth?.auth?.isLoggedIn

  return isLoggedIn ? children : <Navigate to="/login" replace />
}

function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
        </Route>

        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

        {/* <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Layout>
                <Cart />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Layout>
                <Checkout />
              </Layout>
            </ProtectedRoute>
          }
        /> */}

        <Route path="*" element={<h2>404 - Page Not Found</h2>} />

      </Routes>
    </Suspense>
  )
}

export default AppRoutes