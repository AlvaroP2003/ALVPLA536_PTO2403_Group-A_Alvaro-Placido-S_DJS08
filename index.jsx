import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./vans-life/pages/Home"
import About from "./vans-life/pages/About"
import Vans from "./vans-life/pages/Vans/Vans"
import VanDetail from "./vans-life/pages/Vans/VanDetail"
import Login from "./vans-life/pages/Login"
import Dashboard from "./vans-life/pages/Host/Dashboard"
import Income from "./vans-life/pages/Host/Income"
import Reviews from "./vans-life/pages/Host/Reviews"
import HostVans from "./vans-life/pages/Host/HostVans"
import HostVanDetail from "./vans-life/pages/Host/HostVanDetail"
import HostVanInfo from "./vans-life/pages/Host/HostVanInfo"
import HostVanPricing from "./vans-life/pages/Host/HostVanPricing"
import HostVanPhotos from "./vans-life/pages/Host/HostVanPhotos"
import NotFound from "./vans-life/pages/NotFound"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import AuthRequired from "./components/AuthRequired"

import "./server"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route
            path="login"
            element={<Login />}
          />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);