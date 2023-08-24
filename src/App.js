import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import './styles/index.css';
import SearchList from "./pages/SearchList/SearchList";
function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchList />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
