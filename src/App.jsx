import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Homepage } from "./pages/Homepage";
import { ShowsPage } from "./pages/ShowsPage";
import { ShowDetailPage } from "./pages/ShowDetailPage";
import { CastPage } from "./pages/CastPage";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shows" element={<ShowsPage />} />
      <Route path="/shows/:id" element={<ShowDetailPage />} />
      <Route path="/shows/:id/cast" element={<CastPage />} />
    </Routes>
    <Footer />
    </>
  )
}
