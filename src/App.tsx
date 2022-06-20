import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Alphabet, Home, Test } from "./pages";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/alphabet" element={<Alphabet />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
