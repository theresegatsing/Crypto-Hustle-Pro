import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DetailView from './routes/DetailView'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./routes/Layout.jsx";

<BrowserRouter>
  <Routes>
    <Route path ="/" element={<Layout />}>
      <Route index = {true} path = "/" element = {<App />} />
      <Route path = "/coinDetails/:symbol" element = {<DetailView />} />
    </Route>
  </Routes>
</BrowserRouter>
