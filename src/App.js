import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./component/Home";
import Blog from "./component/Blog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
