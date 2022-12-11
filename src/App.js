import HomePage from "./pages/Home";
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ContactPage from "./pages/Contact";
import BlogsPage from "./pages/Blogs";
import NoPage from "./pages/NoPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="" element={<HomePage />}/>
              <Route path="/home" element={<HomePage />}/>
              <Route path="/contact" element={<ContactPage />}/>
              <Route path="/blogs" element={<BlogsPage />}/>
              <Route path="*" element={<NoPage />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
