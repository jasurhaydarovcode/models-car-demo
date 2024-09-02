import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Models from "./routes/Models/Models";
import ModelDetail from "./routes/Models/ModelDetail";
import VideoDetail from "./routes/Models/VideoDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* --------- START MODELS ROUTES --------- */}
      <Route path="/models" element={<Models />} />
      <Route path="/models/:id" element={<ModelDetail />} />
      <Route path="/models/:id/:modelId" element={<VideoDetail />} />
      {/* --------- END MODELS ROUTES --------- */}
    </Routes>
  )
}

export default App
