import { Route, Routes } from "react-router-dom";

import Gallery from "./Gallery/Gallery";
import "./index.css";
import NoMatch from "./NoMatch/NoMatch";
import PhotoItems from "./PhotoItem/PhotoItems";

function App() {
  return (
    <div className=" h-screen  py-1">
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="preferredPhoto" element={<PhotoItems />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
